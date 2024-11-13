function Message() {
    const items = [
        'goa',
        'ooty',
        'berlin',
        'tokyo'
    ];
    return(
       
        <div>
            <h1>list</h1>
                <ul className="list-group">
                    {items.map((item) =>(
                      <li className="list-group-item active" key={item}>
                        {item} </li>
                    ))
                    }
            
                </ul>
        </div>
    )
   
    
}
export default Message;