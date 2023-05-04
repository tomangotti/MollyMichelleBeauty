import { useEffect,useState } from "react"


function About() {
    const [about, setAbout] = useState(null)
    useEffect(() => {
        fetch('/abouts')
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setAbout(data)
                })
            }
        }
        )
    },[])



    return (
        <div className="about">
            <img id="bio_pic" src="https://lh3.googleusercontent.com/JV4FQrOQuR4TEmtMikFb1d7-n52BFoBaDJ9uQ-55nTlufniyYhhAX4kgdFcpAqbyKKY1kIs5GogLLpdObb9O9QVe1cV6QpQ0mKbBpmiHcUdCiKtPM517kT6ZeEWn3tj3NwSVB-nKen0rQ2v9bp9jXiwkwG3QqcPBC79WVBkYo42wo75lE-nXDHEJGAzwNHaQmj_Ktk2p9FZN-Q0VY69lgLT5OwVDb23fm7fqDC9G6bJTj1qTN92kbSnR0lNAZ8fjk4a2CkXIyEy0HMsOFeRCwwnuoB_TFXAYkSqXpT58xTTr5Cp5BdizcO5fL53p8Fa92mW7lpi4ceVyvAqIll07imIXU_q3BBhlL8_sGip8n0ipC0c4exKWePTMe_jeuuStDST8og6gFz6l8C_I6mHWRguAVtqaryKzaBDphNz0qJK7J81GIQtUqQq7NEzZIVQjDyDGS2SVwhdlxqCvX1oAUz74_Sq_tNuRo2pwuFL4yVsRMpKCJrRnzrI4Vz6adZA8AZ35cAA_p3ku3fJS2fhjybtRRzub3kpOCKSWX8H9397LdB3eAfc3YOaywBR_8gAN5_ejvjiqYzMvdzu-5F_cgKFDk4wDZVYu3OY0GAOzEQQP7E9qOfEGWF1EO5WWsH4mQfrmIl64Y9Ks71zzDLzYf7al5UOd64_tzq0glDGLZ0KK0eH9Jq5n_ZD536mgbQviHM8sr-Ts4jWUwY3H7tnn0VbRAfIzCJ56Wi0f1aUI9y5zut7wGfy77t8PZZe-xjp5UnKC6LyF8wTlsIfx7hlUkilpTgm2D37Ak6mnTSLN2vJhsPCA_C2gzios3bDUI7BpCWe7y1PIwpDro3q1DnCHI4673W1W0u3dFICqiC6bIsU88d0gEABDgwRYhtDHrsKtyjWH2tmp11fIYQ_LFroNR6t8kNu55cAq3RbPNWL5jgE7AUeHAQ=w656-h875-s-no?authuser=0" />
            <p id="bio">Molly Michelle Sestito is a skilled and passionate hair stylist, dedicated to creating beautiful and unique hairstyles that bring out the best in her clients.</p>
        </div>
    )
}

export default About
