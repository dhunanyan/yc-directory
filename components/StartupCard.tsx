import React from "react";
import Link from "next/link";
import Image from "next/image";

import { formatDate } from "@lib/utils";
import { EyeIcon } from "lucide-react";
import { Button } from "./ui/button";

export type StartupCardType = {
  _id: number;
  _createdAt: string;
  views: number;
  author: { _id: number; name: string };
  image: string;
  description: string;
  title: string;
  category: string;
};

const StartupCard = ({
  _id,
  _createdAt,
  views,
  author: { _id: authorId, name },
  image,
  description,
  title,
  category,
}: StartupCardType) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/600x400"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card_btn">
          <Link href={`startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
