import express from "express";
import { PrismaClient, Prisma, PolicyStatus } from "@prisma/client";
import cors from "cors";

const app = express();
const port = 4000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/policies", async (req, res) => {
  const { search, skip = 0, take = 5, status } = req.query;

  const or: Prisma.PolicyWhereInput = search
    ? {
        OR: [
          { provider: { contains: search as string, mode: "insensitive" } },
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

  const inStatus = status ? [status] : ["ACTIVE", "PENDING"];

  const count = await prisma.policy.findMany({
    where: {
      ...or,
      status: {
        in: inStatus as unknown as PolicyStatus,
      },
    },
  });

  const policies = await prisma.policy.findMany({
    skip: +skip * +take,
    take: +take,
    where: {
      ...or,
      status: {
        in: inStatus as unknown as PolicyStatus,
      },
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

  res.json({ policies, count: count.length });
});

app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});
