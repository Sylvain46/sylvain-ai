"use client";

import Image, { type ImageProps } from "next/image";

export default function ProtectedImage({ className, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      data-protected-image
      draggable={false}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
      className={`${className ?? ""} select-none`}
    />
  );
}
