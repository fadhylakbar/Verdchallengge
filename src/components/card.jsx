
export const Card = ({ title, thumbnail, description }) => {

  return (
    <div className="group cursor-pointer border shadow rounded p-2">
          <div className=" overflow-hidden rounded transition-all hover:scale-105">
            <img className="object-contain h-48 w-96" src={thumbnail} />
          </div>
          <div className="flex flex-col mt-2">
            <h2 className="text-lg font-medium leading-snug tracking-tight">
              <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_3px]">
                {title}
              </span>
            </h2>
            <h2 className="text-sm font-medium leading-snug tracking-tight text-gray-500 mt-5 line-clamp-2	">
              <span>
                {description}
              </span>
            </h2>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400 mt-5">
              <div className="relative h-5 w-5 flex-shrink-0">
                <img
                  src="/person.jpeg"
                  className="rounded-full object-cover"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <span className="truncate text-sm">Fadhyl Akbar</span>
              <span className="text-xs text-gray-300">•</span>
              <time
                dateTime="2022-10-21T10:50:00.000Z"
                className="truncate text-sm"
              >
                November 13, 2023
              </time>
            </div>
          </div>
        </div>
  );
};
