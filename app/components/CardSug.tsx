import React from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'

// create an object that contains the card Data {quote, name, title} for suggestion to ai chat prompt
const cardData = [
    {quote : "User: Hi, I am new here", name: "CoffAI :", title: "Sup, welcome to the club"},
    {quote : "User: How are you?", name: "CoffAI :", title: "I am good, how about you?"},
    {quote : "User: What is your name?", name: "CoffAI :", title: "I am CoffAI"},
    {quote : "User: What is your purpose?", name: "CoffAI :", title: "I am here to chill and talk with you"},
    {quote : "User: Can you help me with something?", name: "CoffAI :", title: "What do you need homie"},
]

export default function Card() {
  return (
    <InfiniteMovingCards items={cardData} direction='right' speed='normal' pauseOnHover/>
    )
}


      