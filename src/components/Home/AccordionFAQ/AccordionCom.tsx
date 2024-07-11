import { AccordionFAQ } from "./AccordionFAQ";


const AccordionCom = () => {
    return (
     <>
     <h3 className="text-center lg:text-5xl md:text-xl text-base  font-bold my-10 px-10 py-10">FAQ</h3>
        <div className="flex lg:flex-row flex-col gap-11">
            <div className=" basis-2/4">
               <img className="w-[100%] rounded-xl" src="https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className=" basis-2/4">
             <AccordionFAQ />
            </div>
        </div>
     </>
    );
};

export default AccordionCom;