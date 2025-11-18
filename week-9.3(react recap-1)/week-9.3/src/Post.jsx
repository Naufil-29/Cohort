const style = {width:300, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 10, margin:20, };

export function PostComponent({name, followerCount, time, image, description}){ 
  return <div style={style}> 
      <div style={{display: "flex", alignItems: "center", gap: 10, padding: 10}}> 
        <img src={image} alt="avatar" style={{borderRadius: 20, height: 30, width:30}}/>
       <div style={{fontsize: 10, marginLeft: 10}}> 
         <b> 
            {name}
         </b>
          <div>{followerCount}</div>
          {time !== undefined &&<div style={{display: "flex", alignItems: "center"}}> 
            <div>{time}</div>
            <img src={"https://cdn-icons-png.flaticon.com/512/786/786205.png"} alt="more" style={{height: 10, width:10, marginLeft: 5}}/>
          </div>}
        </div>
      </div>
      <div style={{fontsize: 12}}> 
        {description}
      </div>
    </div>
  
}