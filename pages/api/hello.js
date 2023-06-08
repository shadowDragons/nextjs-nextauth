// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const blogData = [
      {
        id: 1,
        title: "Blog 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "/images/blog1.jpg",
      },
      {
        id: 2,
        title: "Blog 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        image: "/images/blog2.jpg",
      },
    ]
    res.status(200).json(blogData)
  } else {
    res.status(401).json({ message: "Unauthorized" })
  }
}