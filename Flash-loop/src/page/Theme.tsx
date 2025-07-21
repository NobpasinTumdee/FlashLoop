import './page.css';

const Theme = () => {

    const setalduin = () => {
        document.querySelector("body")?.setAttribute("data-theme", "alduin");
        localStorage.setItem("SelectedTheme", "alduin")
    }
    const setolivia = () => {
        document.querySelector("body")?.setAttribute("data-theme", "olivia");
        localStorage.setItem("SelectedTheme", "olivia")
    }
    const setLight = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light");
        localStorage.setItem("SelectedTheme", "light")
    }
    const sethanok = () => {
        document.querySelector("body")?.setAttribute("data-theme", "hanok");
        localStorage.setItem("SelectedTheme", "hanok")
    }
    const setdarling = () => {
        document.querySelector("body")?.setAttribute("data-theme", "darling");
        localStorage.setItem("SelectedTheme", "darling")
    }
    
    const SelectedTheme = localStorage.getItem("SelectedTheme");
    if (SelectedTheme === "alduin") {
        setalduin();
    }else if (SelectedTheme === "olivia") {
        setolivia();
    }else if (SelectedTheme === "Light") {
        setLight();
    }else if (SelectedTheme === "hanok") {
        sethanok();
    }else if (SelectedTheme === "darling") {
        setdarling();
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Theme</h1>
            <div className='theme-contaner'>
                <div onClick={setLight} className='theme-sub-select' style={{backgroundColor:'#FFFBFE',border:'2px solid #444444'}}>
                    <p style={{color:'#444444'}}>Light</p>
                    <span style={{backgroundColor:'#444444',color:'#444444'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#FFFBFE',color:'#FFFBFE'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#444444',color:'#444444'}} className='dot-span'>*</span>
                </div>
                <div onClick={sethanok} className='theme-sub-select' style={{backgroundColor:'#D8D2C3',border:'2px solid #513A2A'}}>
                    <p style={{color:'#513A2A'}}>hanok</p>
                    <span style={{backgroundColor:'#513A2A',color:'#513A2A'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#8B6F5C',color:'#8B6F5C'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#393B3B',color:'#393B3B'}} className='dot-span'>*</span>
                </div>
                <div onClick={setalduin} className='theme-sub-select' style={{backgroundColor:'#1C1C1C',border:'2px solid #DFD7AF'}}>
                    <p style={{color:'#DFD7AF'}}>alduin</p>
                    <span style={{backgroundColor:'#DFD7AF',color:'#DFD7AF'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#FFF9F2',color:'#FFF9F2'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#D8D2C3',color:'#D8D2C3'}} className='dot-span'>*</span>
                </div>
                <div onClick={setolivia} className='theme-sub-select' style={{backgroundColor:'#1C1B1D',border:'2px solid #DEAF9D'}}>
                    <p style={{color:'#DEAF9D'}}>olivia</p>
                    <span style={{backgroundColor:'#DEAF9D',color:'#DEAF9D'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#4E3E3E',color:'#4E3E3E'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#F2EFED',color:'#F2EFED'}} className='dot-span'>*</span>
                </div>
                <div onClick={setdarling} className='theme-sub-select' style={{backgroundColor:'#FEC8CD',border:'2px solid #FFFFFF'}}>
                    <p style={{color:'#FFFFFF'}}>darling</p>
                    <span style={{backgroundColor:'#FFFFFF',color:'#FFFFFF'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#A30000',color:'#A30000'}} className='dot-span'>*</span>
                    <span style={{backgroundColor:'#FFFFFF',color:'#FFFFFF'}} className='dot-span'>*</span>
                </div>
            </div>
        </>
    )
}

export default Theme
