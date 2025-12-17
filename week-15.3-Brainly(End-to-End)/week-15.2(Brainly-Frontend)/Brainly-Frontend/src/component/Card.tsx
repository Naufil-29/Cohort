import { ShareIcon } from "../icons/shareIcon";

interface CardProps {
    title: string,
    link: string,
    type: "youtube" | "twitter"
}

export function Card({ title, link, type }: CardProps) {

    return <div>
                <div className="Card p-4 bg-white rounded-md border-gray-200 max-w-72 border overflow-hidden min-h-48"> 
                    <div className="TopBar flex items-center justify-between"> 
                        <div className="Left flex items-center"> 
                            <div className="Icon text-gray-500"> 
                                <ShareIcon size="md"/>
                            </div>
                            {title}
                        </div>

                        <div className="Right flex items-center text-gray-500"> 
                            <div className="Icon"> 
                                <a  href={link} target="_blank"> 
                                    <ShareIcon size="md"/>
                                </a>
                            </div>
                            <div className="Icon"> 
                                <ShareIcon size="md"/>
                            </div>
                        </div>
                    </div>


                    <div className="Content pt-4 max-w-70"> 
                       {type === "youtube" && <iframe width="full" height="250" src={link.replace("watch", "embed") .replace("?v=", "/")}
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen></iframe>}

                       {type === "twitter" && <blockquote className="twitter-tweet"> 
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>}
                    </div>
                </div>
                    
          </div>
}