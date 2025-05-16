"use client";
import Image from "next/image";
import React from "react";

type Card = {
    title: string;
    src: string;
};

type FocusCardProps = {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

const FocusCard = React.memo(function FocusCard({
                                                    card,
                                                    index,
                                                    hovered,
                                                    setHovered,
                                                }: FocusCardProps) {
    return (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-3xl relative bg-bg-primary-dark overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ${
                hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
            }`}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />
            <div
                className={`absolute inset-0 bg-[#1C2025]/20 flex items-end justify-center py-8 px-4 transition-opacity duration-300 ${
                    hovered === index ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="text-xl text-center font-firaSans font-medium bg-clip-text text-transparent bg-text-primary-dark">
                    {card.title}
                </div>
            </div>
        </div>
    );
});

FocusCard.displayName = "FocusCard";

export default FocusCard;
