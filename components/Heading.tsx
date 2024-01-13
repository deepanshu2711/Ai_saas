interface HeadingProps{
    title:string,
    description:string,
    icon:any,
    iconColor?:string,
    bgColor?:string
}

const Heading = ({title,description,icon :Icon,iconColor, bgColor}:HeadingProps) => {
    return ( 
        
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-6">
                <div className={`${bgColor} p-2 w-fit rounded-md`}>
                    <Icon className ={`w-10 h-10 ${iconColor}`} />
                </div>

                <div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
            
        
     );
}
 
export default Heading;