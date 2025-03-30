export default function MeetingSchedule() {
  
  return (
    <div style={{ maxWidth: "max-content" }} className="caret-transparent text-center mx-auto">
      <a
        target="_blank"
        href="https://calendar.app.google/q3B2rkBJtAgUdwLR6"
        className="cursor-pointer no-underline bg-carrot-600 rounded-xl rounded-b-none flex items-center justify-center py-10"
      >
        <p className="text-white text-2xl w-1/2 font-semibold">
          Schedule a Meeting with Us to Discuss the Details
        </p>
        <div className="flex-col ml-5 h-full">
          <div className="w-[50px] h-[50px] mb-10 relative">
            <img src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/912efd56-89df-4499-5d75-b11629a69f00/icon100x100" width={100} height={100} alt="meeting icon" className="object-cover"/>
          </div>
          <div className="w-[50px] h-[50px] mt-10 relative">
            <img src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/9aeff982-f71c-4efe-c4ae-66667a161200/icon100x100" width={100} height={100} alt="meeting icon" className="object-cover"/>
          </div>
        </div>
      </a>
      <div className="rounded-xl bg-carrot-300 rounded-t-none">

        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ts-5A-akJnclu6mwaWaqGKpGVy9SsseHM5ZrAEZf9VW-67BHmKht6l5R5aH0QkAsqCUmuQ13R?gv=true"
          className="border-0"
          width="100%"
          height="600"
          loading="lazy"
          title="Schedule Google Meeting"
          frameBorder="0"
        ></iframe>

      </div>
    </div>
  );
}
