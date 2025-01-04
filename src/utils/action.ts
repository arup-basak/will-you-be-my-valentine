"use server";

import { PrismaClient } from "@prisma/client";
import { UserSchema, IUser } from "./types";
import {z} from 'zod'

const prisma = new PrismaClient();

export const saveToDb = async (newName: string, count: number, ip: string) => {
  try {
    const op = await prisma.user.create({
      data: {
        name: newName,
        count: Number(count),
        time: new Date(),
        ip: ip
      },
    });
    console.log(op);
  } catch (error) {
    console.error("Error saving to db:", error);
  }
};

export const getAllNames = async (): Promise<IUser[]> => {
  try {
    const names = await prisma.user.findMany();
    console.log(names)
    return z.array(UserSchema).parse(names);
  } catch (error) {
    console.error("Error fetching names:", error);
    return [];
  }
};
