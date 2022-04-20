import { NextApiRequest, NextApiResponse } from "next";
import ms from "ms";
import { setTimeout } from "timers/promises";

export default async function TimeAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const time = req.query.time as string;

  const milliseconds = ms(time);
  await setTimeout(milliseconds);

  res.status(200).json({
    data: true,
    time: milliseconds,
  });
}
