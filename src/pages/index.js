import Head from 'next/head'
import Image from 'next/image'

import Card from "@/Components/Card/Card";
import {useEffect, useState} from "react";
import API from "@/pages/api/Api";
import {log} from "next/dist/server/typescript/utils";
import CardList from "@/Components/CardList/CardList";


export default function Home() {


    return (
        <>
            <Head>
                <title>Тестовое задание</title>
                <meta name="description" content="Тестовое задание"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <CardList/>
        </>
    )
}
