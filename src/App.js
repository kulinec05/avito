import React, {useEffect, useState} from "react";
import News from "./component/News";
import {useDispatch, useSelector} from "react-redux";
import {NewsFetcher} from "./asyncActions/data";


const App = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data.data)
    const [update, setUpdate] = useState( 0)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(NewsFetcher())

    }, [])
   function updatePage(){
        setUpdate(update + 1)
    }

    setTimeout(() => {
        setLoading(true)
    }, 3600)
    return (
        <div>
            <button onClick={()=>{
                updatePage();
            }}>Update list</button>
            {loading ? Object.values(data).filter(t => t !== null).map(value => {
                return <News key={value.id}
                             value={value}
                             useprops={() => {
                                 props.history.push(`${value.id}`)
                             }
                             }/>
            }) : <div>Loading ...</div>
            }
        </div>
    );
}

export default App;