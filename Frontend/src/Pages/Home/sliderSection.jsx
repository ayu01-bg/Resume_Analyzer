import { useContext } from "react";
import { AppContext } from "../../Contents/contentData";

const SliderSection = () => {

const {items} = useContext(AppContext)

    return (
        <section className="my-8 mx-auto w-full overflow-hidden bg-white rounded-xl py-5">

            <div className="w-full overflow-hidden flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-5 py-1 px-4 ">


                {items.map((rw, i) => {
                    const Icon = rw.icon;
                    return (


                        <div className=" flex lg:flex-row lg:items-center lg:gap-4 p-3 bg-olive-200/30 w-full sm:w-1/3 rounded-sm" key={i}>

                            <span className="  p-2 rounded-sm ">
                                <Icon size='30px' />
                            </span>

                            <div className=" flex flex-col px-3">
                                <span className=" text-2xl ">{rw.title}</span>
                                <span className=" text-gray-500 text-xs whitespace-nowrap">{rw.caption}</span>
                            </div>

                        </div>
                    )

                })}


            </div>

        </section>
    )
}

export default SliderSection