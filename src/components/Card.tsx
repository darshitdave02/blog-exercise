import * as React from 'react'
import {ReactComponent as HeartRed} from './../assets/Icons/heart-red.svg'
import {ReactComponent as HeartBlack} from './../assets/Icons/heart-black.svg'
import {ReactComponent as Clapping} from './../assets/Icons/clapping.svg'
import { Interface } from 'readline'

interface proType {
   data:{  date: string,
  readingTime: string,
  title: string,
  description: string,
  claps: number,
  liked: boolean,
  image: string
  }

};

export default function Card(props:proType):JSX.Element {

    const [clapCount,setClapCount] = React.useState(props.data.claps);

    const [like,setLike] = React.useState(false);

    const increaseClap = () => {
        setClapCount(clapCount+1);
    }

    const changeLike = () => {
        setLike(!like);
    } 

    return (
        <div>
         
            <div className="card">

            <img src={require(`./../assets/Images/${props.data.image}`)} alt={props.data.image} />

            <div className="details">
                <div className="meta">
                    <p>
                        {props.data.date}
                    </p>
                    <p>
                        {props.data.readingTime}
                    </p>
                </div>
                <div className="caption">
                    <p>
                        {props.data.title}
                    </p>
                </div>
                <div className="description">
                    <p>
                        {props.data.description}
                    </p>
                </div>
                <div className="interaction">
                    <div className="claps">
                        <Clapping className='Clapping' onClick={increaseClap}/> {clapCount}
                    </div>
                    <div className="likes">
                        {like && <HeartRed onClick={changeLike} className='HeartRed' />}
                        {!like && <HeartBlack onClick={changeLike} className='HeartBlack' />}

                    </div>

                </div>

            </div>
        </div>
        </div>
      );
}