import React from 'react'
import "./styles.css"
import { Visibility } from '@material-ui/icons'

export default function SmallWidget() {
    return (
        <div className="smallWidget">
            <span className="smallWidgetTitle">Consultas em andamento</span>
            <ul className="listaSmallWidget">
                <li className="itensListaSmallWidget">
                    <img src="https://i.imgur.com/NjZikgz.jpg" alt="" className="smallWidgetImg" />
                    <div className="usuarioSmallWidget">
                        <span className="nomeSmallWidget">Anna Banana</span>
                        <span className="tituloNomeSmallWidget">Software Engineer</span>
                    </div>
                    <button className="smallButtonWidget">
                        <Visibility className="smallWidgetIcon" />
                        Display
                    </button>
                </li>
                <li className="itensListaSmallWidget">
                    <img src="https://i.imgur.com/NjZikgz.jpg" alt="" className="smallWidgetImg" />
                    <div className="usuarioSmallWidget">
                        <span className="nomeSmallWidget">Anna Banana</span>
                        <span className="tituloNomeSmallWidget">Software Engineer</span>
                    </div>
                    <button className="smallButtonWidget">
                        <Visibility className="smallWidgetIcon" />
                        Display
                    </button>
                </li>
                <li className="itensListaSmallWidget">
                    <img src="https://i.imgur.com/NjZikgz.jpg" alt="" className="smallWidgetImg" />
                    <div className="usuarioSmallWidget">
                        <span className="nomeSmallWidget">Anna Banana</span>
                        <span className="tituloNomeSmallWidget">Software Engineer</span>
                    </div>
                    <button className="smallButtonWidget">
                        <Visibility className="smallWidgetIcon" />
                        Display
                    </button>
                </li>
                <li className="itensListaSmallWidget">
                    <img src="https://i.imgur.com/NjZikgz.jpg" alt="" className="smallWidgetImg" />
                    <div className="usuarioSmallWidget">
                        <span className="nomeSmallWidget">Anna Banana</span>
                        <span className="tituloNomeSmallWidget">Software Engineer</span>
                    </div>
                    <button className="smallButtonWidget">
                        <Visibility className="smallWidgetIcon" />
                        Display
                    </button>
                </li>
                <li className="itensListaSmallWidget">
                    <img src="https://i.imgur.com/NjZikgz.jpg" alt="" className="smallWidgetImg" />
                    <div className="usuarioSmallWidget">
                        <span className="nomeSmallWidget">Anna Banana</span>
                        <span className="tituloNomeSmallWidget">Software Engineer</span>
                    </div>
                    <button className="smallButtonWidget">
                        <Visibility className="smallWidgetIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
