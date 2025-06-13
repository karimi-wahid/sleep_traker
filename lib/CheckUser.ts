import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const checkUser = async () => {
  const user = await currentUser();

  // Check for current logged in clerk user
  if (!user) {
    return null;
  }

  // Check if the user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If user is in database, return user
  if (loggedInUser) {
    return loggedInUser;
  }

  // Check if a user with this email already exists
  const email = user.emailAddresses?.[0]?.emailAddress;
  if (!email) throw new Error("No email found for user.");

  const existingEmailUser = await db.user.findUnique({
    where: { email },
  });
  if (existingEmailUser) return existingEmailUser;

  // If not in database, create new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
