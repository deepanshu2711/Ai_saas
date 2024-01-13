import Image from "next/image";

interface EmptyProps{
    lable:string
}

export const Empty = ({lable}:EmptyProps) => {
    return ( 
        <div className="h-full p-10 flex flex-col items-center 
        justify-center">
            <div className="relative h-72 w-72">
                <Image
                src={"/empty.png"}
                fill
                alt="empty"
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">{lable}</p>
            
        </div>
     );
}
 
