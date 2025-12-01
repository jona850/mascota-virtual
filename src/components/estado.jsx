export default function Estado( {hambre} ){
    return(
        <>
            <div className="w-full ">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>Hambre</span>
                <span>{hambre}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${
                    hambre > 60 ? 'bg-green-500' :
                    hambre > 30 ? 'bg-yellow-500' : 'bg-red-500'
                    } transition-all duration-500`}
                    style={{ width: `${hambre}%` }}
                ></div>
                </div>
            </div>
        </>

    );

}