import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const keyboardSoundsGroup1 = [
  { keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const keyboardSoundsGroup2 = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Punchy-Kick",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const drumName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit"
};

const audioGroup = {
  heaterKit: keyboardSoundsGroup1,
  smoothPianoKit: keyboardSoundsGroup2
}

const KeyboardKey = ({ playKey, sound: { id, key, url, keyCode} }) => {
  
  const handleKeydown = (event) => {
    if(event.keyCode === keyCode) {
      playKey(key, id)
    }
  }
  
    React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
  }, [])
    
  return (
    <button id={keyCode} className="drum-pad" onClick={() => playKey(key, id)}>
      <audio className="clip" id={key} src={url} />
      {key}
    </button>
     )
}

const Keys = ({ power, playKey, audio }) => ( 
  <div className="keyboard">  
    {power === false
      ? audio.map((sound) => <KeyboardKey playKey={playKey} sound={{...sound, url:"#"}} />)
      : audio.map((sound) => <KeyboardKey playKey={playKey} sound={sound} />)
    }
  </div>
)

const DomControl = ({ powerControl, name, power, volume, handleVolumeChange, changeDrumStyle }) => (
  <div className="control">
    <button 
      style={{ backgroundColor: power ? 'navy': '#C21807'}}
      onClick={powerControl}>
      Power: {power ? "ON" : "OFF"}
    </button>
    <h2>Volume: {Math.floor(volume * 100)}%</h2>
    <input 
      max="1"
      min="0"
      step="0.01"
      type="range"
      value={volume}
      onChange={handleVolumeChange}
      />
    <h2 id="display">{name}</h2>
    <button onClick={changeDrumStyle}>Change Drum Style</button>
  </div>
)

const App = () => {
  const [power, setPower] = React.useState(true);
  const [volume, setVolume] = React.useState(0.5);
  const [audioName, setAudioName] = React.useState("");
  const [audioType, setAudioType] = React.useState("heaterKit");
  const [audio, setAudio] = React.useState(audioGroup[audioType]);
  
  const powerControl = () => {
    setPower(!power)
  }
  
  const handleVolumeChange = (event) => {
     setVolume(event.target.value)
  }
  
  const playKeyStyle = (key) => {
    key.parentElement.style.backgroundColor = "#1A2954"
    key.parentElement.style.color = "#fff"
  }
  
  const stopKeyStyle = (key) => {
    setTimeout(() => {
      key.parentElement.style.backgroundColor = "#fff"
      key.parentElement.style.color = "#1A2954"
    }, 160)
  }
  
  const playKey = (key, audio) => {
    setAudioName(audio);
    const sound = document.getElementById(key)
    playKeyStyle(sound)
    sound.currentTime = 0;
    sound.play()
    stopKeyStyle(sound)
  }
  
  const changeDrumStyle = () => {
    setAudioName("");
    if (audioType === "heaterKit") {
      setAudioType("smoothPianoKit")
      setAudio(audioGroup.smoothPianoKit)
    } else {
      setAudioType("heaterKit")
      setAudio(audioGroup.heaterKit)
    }
  }
  
  const setKeyVolumeValue = () => {
    const sounds = audio.map(x => document.getElementById(x.key))
    sounds.forEach(j => {
      if (j) {
        j.volume = volume
      }
    })
  }
  
  return (
    <div id="drum-machine">
      {setKeyVolumeValue()}
      <div className="wrapper">
        <Keys power={power} playKey={playKey} audio={audio}/>
        <DomControl
          powerControl={powerControl}
          volume={volume}
          power={power}
          handleVolumeChange={handleVolumeChange}
          name={audioName || drumName[audioType]} 
          changeDrumStyle={changeDrumStyle}
          />
      </div>
    </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"));
