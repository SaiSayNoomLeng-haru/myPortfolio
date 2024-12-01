import { memo } from "react"
import PageTitle from "../Utilities Components/PageTitle"
import { GoDotFill } from "react-icons/go"
import { GiCottonFlower } from "react-icons/gi"
import { RiTShirtAirLine } from "react-icons/ri"
import { getTeam } from "../Api"
import { useLoaderData } from "react-router-dom"
import Banner from "../Utilities Components/Banner"


export async function loader(){
    const loadTeam = await getTeam();
    return loadTeam;
}

const AboutUs = () => {
    const team = useLoaderData()
    return(
        <section className="space-y-5 my-10">
            <PageTitle destination='about us'/>

            <div className="text-center p-5 md:max-w-[50vw] mx-auto">
                <p className="text-lg">Our story</p>
                <h1 className="text-xl font-semibold">Crafted with Care: Fine Materials, Thoughtful Design</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore debitis voluptatibus aspernatur voluptate est, rem sint obcaecati veritatis dolor?</p>
                <p className="font-cursive text-3xl my-3">Haru</p>
                <p>Haru <GoDotFill className="inline text-custom-orange" /> CEO</p>
            </div>

            <div className="grid md:grid-cols-2 md:grid-rows-2 my-3 gap-2 max-w-[80%] mx-auto">
                    <img src="/assets/images/haru01.jpg" alt="" loading="lazy" className="md:row-span-2 md:place-self-end"/>
                    <img src='/assets/images/haru02.jpg' alt="" loading="lazy" className="md:self-end"/>
                    <img src='/assets/images/haru03.jpg' alt='' loading="lazy" className="md:self-start" />
            </div>

            <div className="bg-custom-orange text-black p-10 flex flex-col md:flex-row gap-5 justify-center items-center max-w-[80%] mx-auto">
                    <p className="mx-3">25+ years</p>
                    <p className="mx-3">180+ stores</p>
                    <p className="mx-3">100k+ Customers</p>
                    <p className="mx-3">35+ Awards</p>
                    <p className="mx-3">98+ % satisfied</p>
            </div>

            <div className="grid md:grid-cols-2 max-w-[80%] mx-auto">
                <img src="/assets/images/haru04.jpg" alt=""/>
                <div className="grid place-content-center px-10">
                    <p>Our product Quality</p>
                    <h2 className="text-3xl font-semibold">We Make Things Comfy, Pretty, and Fancy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cumque suscipit eveniet ullam fugit, quisquam voluptate cupiditate hic molestiae rem?</p>

                    <div className="grid md:grid-cols-2 gap-3 place-items-center">
                        <div>
                            <GiCottonFlower className="text-custom-orange text-[5rem]" />
                            <p className="font-semibold text-xl">100% Cotton</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, consequatur?</p>
                        </div>

                        <div className="place-items-center text-center">
                            <RiTShirtAirLine className="text-custom-orange text-[5rem]" />
                            <p className="font-semibold text-xl">100% Cotton</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, consequatur?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[80%] mx-auto text-center">
                <p>Our Team</p>
                <h2 className="text-3xl font-semibold">Meet Our Team</h2>

                <div className="grid md:grid-cols-3 grid-rows-1 max-w-[80%] mx-auto gap-3 m-3 justify-between items-center">
                    {team
                        .map(member => (
                            <div key={member.id} >
                            <img src={member.imgUrl} alt="" className="h-full mx-auto"/>
                            <p>{member.name}</p>
                            <p>{member.position}</p>
                        </div>
                        ))
                    }
                    
                </div>
            </div>

            <Banner className="max-w-[80%] mx-auto" />
        </section>

    )
}

export default memo(AboutUs)