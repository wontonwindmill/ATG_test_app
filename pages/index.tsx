import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import SelectedCoachPage from './SelectedCoachPage'
import {ReviewProps} from './Reviews'

const inter = Inter({weight:"500", subsets: ['latin'] })


export type CoachProps = {
  name: string
  title: string
  rate: string
  description: string 
  id: string
  reviews: ReviewProps[]
  tags?: string[]
}


var coach1: CoachProps = {
  name: "Ben Patrick",
  title: "ATG Level 3 Coach",
  rate: "150",
  description: "Whatever your goals are I can help you achieve them. Whether it’s overcoming pain or mastering a sport I have experience coaching and getting results for people... Show more",
  id: "1",
  reviews: [{date:"2 weeks ago", id:"0",name: "John", review: "Ben is a fantastic coach that really understands bulletproofing the body, he's helped me through injuries and surgeries to improve my knee health!"},
  {date:"1 week ago",id:"1",name:"Mary",review:"I have had several sessions with Ben and I plan to continue with him"},
  {date:"2 days ago",id:"2",name:"Mark",review:"Really enjoyed the training session with Ben and got great help."}],
  tags: ["Tennis","Pull-ups"]
};


export default function Home() {
  
  return (
    <>
      <Head>
        <title>CoachFinder ATG</title>
        <meta name="description" content="App for ATG coaches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className= {inter.className}>
        <div className = "flex flex-column max-w-md p-4">
          <SelectedCoachPage name ={coach1.name} title ={coach1.title} rate = {coach1.rate} description = {coach1.description} id = "0" reviews = {coach1.reviews} tags = {coach1.tags} ></SelectedCoachPage>
        </div>
      </main>
    </>
  )
}
