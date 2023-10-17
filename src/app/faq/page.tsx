const FAQ = () => {
   return (
      <div className="flex justify-center ">
         <div className="w-[90%] py-10 flex flex-col gap-5">
            <h2 className="text-3xl font-semibold capitalize">
               Frequently Ask Question{" "}
            </h2>
            <div className="w-full">
               <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-lg font-medium">
                     Click to open this one and close others
                  </div>
                  <div className="collapse-content text-sm">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-lg font-medium">
                     Click to open this one and close others
                  </div>
                  <div className="collapse-content text-sm">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-lg font-medium">
                     Click to open this one and close others
                  </div>
                  <div className="collapse-content text-sm">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-lg font-medium">
                     Click to open this one and close others
                  </div>
                  <div className="collapse-content text-sm">
                     <p>hello</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;
