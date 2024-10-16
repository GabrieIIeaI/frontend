import Image from "next/image"

const Header = () => 
        <header className="flex gap-4 flex-row justify-between p-5 bg-blue-800">
            <Image src='/viagens-promo-icon.png' alt='viagens-promo-icon' width={50} height={50}/>

            <h1 className="font-bold text-4xl text-white"> Avaliação Técnica </h1>

            <div />
        </header>

export default Header