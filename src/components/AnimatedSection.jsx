import React from 'react'
import {counterItems} from "../constants/index.js";

const AnimatedSection = () => {
    return (
        <div id="heroEnd" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        className="px-6 py-8 rounded-xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 flex flex-col justify-center"
                    >
                        <div className="counter-number text-black text-xl font-bold mb-2">
                            {item.value}{item.suffix}
                        </div>
                        <div className="text-gray-600 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AnimatedSection