import express from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import cors from "cors";

const app = express();
const port = 4000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/policies", async (req, res) => {
  const {
    search,
    skip = 0,
    take = 5,
    insurance = "",
    provider = "",
  } = req.query;

  const or: Prisma.PolicyWhereInput = search
    ? {
        OR: [
          {
            customer: {
              firstName: { contains: search as string, mode: "insensitive" },
            },
          },
          {
            customer: {
              lastName: { contains: search as string, mode: "insensitive" },
            },
          },
        ],
      }
    : {};

  let types: any = {};
  if (insurance) types["insuranceType"] = insurance;
  if (provider) types["provider"] = provider;

  const count = await prisma.policy.findMany({
    where: {
      ...or,
      status: {
        in: ["ACTIVE", "PENDING"],
      },
      ...types,
    },
  });

  const providers = await prisma.policy.findMany({
    distinct: ["provider"],
    select: {
      provider: true,
    },
  });

  const insuranceTypes = await prisma.policy.findMany({
    distinct: ["insuranceType"],
    select: {
      insuranceType: true,
    },
  });

  const policies = await prisma.policy.findMany({
    skip: search ? 0 : +skip * +take,
    take: +take,
    where: {
      ...or,
      status: {
        in: ["ACTIVE", "PENDING"],
      },
      ...types,
    },
    select: {
      id: true,
      provider: true,
      insuranceType: true,
      status: true,
      startDate: true,
      endDate: true,
      customer: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          dateOfBirth: true,
        },
      },
    },
  });

  res.json({ policies, count: count.length, providers, insuranceTypes });
});

app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});
