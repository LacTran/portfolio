import React from 'react';
import image from '../assets/background.jpg'

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="background"
                className="absolute object-cover w-full h-full background-image"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hi, I'm Lac Tran.
                </h1>
            </section>
        </main>
    )
}