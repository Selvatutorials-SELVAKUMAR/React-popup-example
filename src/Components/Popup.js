import React , {useEffect , useRef ,useState}from 'react'
import './Popup.css'
function Popup({closePopup}) {
    const [isclosed,setIsClosed] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (ref.current && !(ref.current.contains(e.target))) {
            setIsClosed(!isclosed)
           setTimeout(() => {
            closePopup()
           },400)
        }
        }
        document.querySelector('.popup').addEventListener("mousedown", checkIfClickedOutside)
      })
    return (
        <div className = 'popup'>
            <div className = {isclosed ? 'popup-content reverse' : 'popup-content drop'} ref = {ref}>
                 <h3>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam similique eligendi earum modi cumque nam quo minima. In accusamus excepturi, quidem quis, voluptas voluptatibus aperiam eligendi corrupti cum praesentium laboriosam nostrum at sint sunt dignissimos veniam necessitatibus doloremque vel dolorem! Repudiandae provident, unde ea similique nostrum illum suscipit! Consectetur atque vel quidem voluptate, cumque harum in quaerat velit vitae enim.
                 </h3>
                 <button onClick = {() => {
                     setIsClosed(!isclosed)
                     setTimeout(() => {
                        closePopup()
                       },400)
                 }}>Close</button>
            </div>
        </div>
    )
}

export default Popup
