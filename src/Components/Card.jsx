const Card = () => {
  return (
    <div className="shadow-lg rounded-xl flex flex-col items-start sm:flex-row gap-4 w-fit sm:max-w-lg py-3 px-4 md:p-5">
         <div className="basis-2/5 flex">
            <img
              className="rounded-xl h-full max-h-60 object-cover"
              src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600"
              alt="Mobile UX Design Trends"
            />
        </div>
        <div className="flex flex-col sm:items-center justify-start basis-3/5 gap-2 md:gap-3">
            <div className="text-xl">12 Mobile UX Design Trends For 2018</div>
            <div className="">Things move quickly in the mobile app universe.
                 To succeed in the field of mobile UX design, designers must have the foresight 
                 and prepare for new challenges around the corner</div>
            <div className="bg-neutral-200   rounded-xl flex flex-row p-1 justify-between ">
                <div className="flex flex-col mx-2 md:mx-4">
                    <div>Jon Kantner</div>
                    <div>14th July 2022</div>
                </div>
                <button className="bg-neutral-400 rounded-md my-2 px-2 mx-1">
                    Read more
                </button>
            </div>

        </div>



    </div>
  )
}


export default Card;




