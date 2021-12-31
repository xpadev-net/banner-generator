import Head from 'next/head'
import Styles from '@/styles/Home.module.scss'
import {useEffect, useRef, useState} from "react";
import CanvasDrawer from "@/libraries/canvasDrawer";
import InputRange from "@/components/inputrange";

export default function Home() {
    const inputBackground = useRef(),
        canvas = useRef(),
        canvasdrawer = useRef(),
        [inputBackgroundScale,setInputBackgroundScale] = useState(100),
        [inputBackgroundPosX,setInputBackgroundPosX] = useState(0),
        [inputBackgroundPosY,setInputBackgroundPosY] = useState(0),
        [inputCardBackground,setInputCardBackground] = useState("#ffffff"),
        [inputCardMargin,setInputCardMargin] = useState(50),
        [inputCardRadius,setInputCardRadius] = useState(50),
        [inputCardShadowColor,setInputCardShadowColor] = useState("#000000"),
        [inputCardShadowBlur,setInputCardShadowBlur] = useState(50),
        [inputCardShadowOffsetX,setInputCardShadowOffsetX] = useState(0),
        [inputCardShadowOffsetY,setInputCardShadowOffsetY] = useState(0),
        [inputIconScale,setInputIconScale] = useState(100),
        [inputIconRadius,setInputIconRadius] = useState(100),
        [inputIconBorder,setInputIconBorder] = useState(5),
        [inputIconOffsetX,setInputIconOffsetX] = useState(0),
        [inputIconOffsetY,setInputIconOffsetY] = useState(0),
        [inputIconShadowColor,setInputIconShadowColor] = useState("#000000"),
        [inputIconShadowBlur,setInputIconShadowBlur] = useState(50),
        [inputIconShadowOffsetX,setInputIconShadowOffsetX] = useState(0),
        [inputIconShadowOffsetY,setInputIconShadowOffsetY] = useState(0),
        [inputNameBig,setInputNameBig] = useState("名前(上)"),
        [inputNameSmall,setInputNameSmall] = useState("名前(下)"),
        [inputNameBigFont,setInputNameBigFont] = useState("normal 600 100px Arial, \"ＭＳ Ｐゴシック\", \"MS PGothic\", MSPGothic, MS-PGothic"),
        [inputNameSmallFont,setInputNameSmallFont] = useState("normal 100 20px Arial, \"ＭＳ Ｐゴシック\", \"MS PGothic\", MSPGothic, MS-PGothic");
    useEffect(()=>{
        if (isElement(canvas.current)) {
            canvasdrawer.current = new CanvasDrawer(canvas.current);
        }
    },[canvas]);
    const inputFileOnChange = (e) => {
        const fileData = e.target.files[0];
        const reader = new FileReader();
        // ファイル読み込みに成功したときの処理
        reader.onload = function() {
            // ブラウザ上に画像を表示する
            const img = document.createElement('img');
            img.src = reader.result;
            img.onload=()=>{
                if (e.target.id==="background"){
                    canvasdrawer.current.backgroundImage=img;
                }else{
                    canvasdrawer.current.iconImage=img;
                }
                canvasdrawer.current.updateCanvas();
            }
        }
        // ファイル読み込みを実行
        reader.readAsDataURL(fileData);
    }
    const inputBackgroundScaleOnChange = (e) => {
        setInputBackgroundScale(e.target.value);
        canvasdrawer.current.backgroundScale=e.target.value/100;
        canvasdrawer.current.updateCanvas();
    }
    const inputBackgroundPosXOnChange = (e) => {
        setInputBackgroundPosX(e.target.value);
        canvasdrawer.current.backgroundPosX=e.target.value/100;
        canvasdrawer.current.updateCanvas();
    }
    const inputBackgroundPosYOnChange = (e) => {
        setInputBackgroundPosY(e.target.value);
        canvasdrawer.current.backgroundPosY=(e.target.value/100);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardBackgroundOnChange = (e) => {
        setInputCardBackground(e.target.value);
        canvasdrawer.current.cardBackground=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardMarginOnChange = (e) => {
        setInputCardMargin(e.target.value);
        canvasdrawer.current.cardMargin=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardRadiusOnChange = (e) => {
        setInputCardRadius(e.target.value);
        canvasdrawer.current.cardCornerRadius=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardShadowColorOnChange = (e) => {
        setInputCardShadowColor(e.target.value);
        canvasdrawer.current.cardShadowColor=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardShadowBlurOnChange = (e) => {
        setInputCardShadowBlur(e.target.value);
        canvasdrawer.current.cardShadowBlur=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardShadowOffsetXOnChange = (e) => {
        setInputCardShadowOffsetX(e.target.value);
        canvasdrawer.current.cardShadowOffsetX=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputCardShadowOffsetYOnChange = (e) => {
        setInputCardShadowOffsetY(e.target.value);
        canvasdrawer.current.cardShadowOffsetY=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconScaleOnChange = (e) => {
        setInputIconScale(e.target.value);
        canvasdrawer.current.iconScale=(e.target.value/100);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconRadiusOnChange = (e) => {
        setInputIconRadius(e.target.value);
        canvasdrawer.current.iconRadius=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconBorderOnChange = (e) => {
        setInputIconBorder(e.target.value);
        canvasdrawer.current.iconBorder=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconOffsetXOnChange = (e) => {
        setInputIconOffsetX(e.target.value);
        canvasdrawer.current.iconOffsetX=Number(e.target.value/100);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconOffsetYOnChange = (e) => {
        setInputIconOffsetY(e.target.value);
        canvasdrawer.current.iconOffsetY=Number(e.target.value/100);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconShadowColorOnChange = (e) => {
        setInputIconShadowColor(e.target.value);
        canvasdrawer.current.iconShadowColor=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconShadowBlurOnChange = (e) => {
        setInputIconShadowBlur(e.target.value);
        canvasdrawer.current.iconShadowBlur=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconShadowOffsetXOnChange = (e) => {
        setInputIconShadowOffsetX(e.target.value);
        canvasdrawer.current.iconShadowOffsetX=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputIconShadowOffsetYOnChange = (e) => {
        setInputIconShadowOffsetY(e.target.value);
        canvasdrawer.current.iconShadowOffsetY=Number(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputNameBigOnChange = (e) => {
        setInputNameBig(e.target.value);
        canvasdrawer.current.nameBig=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputNameSmallOnChange = (e) => {
        setInputNameSmall(e.target.value);
        canvasdrawer.current.nameSmall=(e.target.value);
        canvasdrawer.current.updateCanvas();
    }
    const inputNameBigColorOnChange = (e) => {
        canvasdrawer.current.nameBigColor=e.target.value;
        canvasdrawer.current.updateCanvas();
    }
    const inputNameBigFontOnChange = (e) => {
        setInputNameBigFont(e.target.value)
        canvasdrawer.current.nameBigFont=e.target.value;
        canvasdrawer.current.updateCanvas();
    }
    const inputNameSmallColorOnChange = (e) => {
        canvasdrawer.current.nameSmallColor=e.target.value;
        canvasdrawer.current.updateCanvas();
    }
    const inputNameSmallFontOnChange = (e) => {
        setInputNameSmallFont(e.target.value)
        canvasdrawer.current.nameSmallFont=e.target.value;
        canvasdrawer.current.updateCanvas();
    }
    return (
        <>
            <Head>
                <title>BannerGenerator</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={Styles.wrapper}>
                <div className={Styles.canvasWrapper}>
                    <canvas width={1500} height={500} className={Styles.canvas} ref={canvas}/>
                </div>
                <div className={Styles.inputWrapper}>
                    <div className={Styles.inputContainer}>
                        <h2>背景</h2>
                        <p><input type="file" accept={"image/*"} onChange={inputFileOnChange} id={"background"}/></p>
                        <table>
                            <tr>
                                <th>サイズ</th>
                                <td><InputRange min={0} max={200} step={1} value={inputBackgroundScale} onchange={inputBackgroundScaleOnChange} unit={"%"}/></td>
                            </tr>
                            <tr>
                                <th>横</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputBackgroundPosX} onchange={inputBackgroundPosXOnChange} unit={"%"}/></td>
                            </tr>
                            <tr>
                                <th>縦</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputBackgroundPosY} onchange={inputBackgroundPosYOnChange} unit={"%"}/></td>
                            </tr>
                        </table>
                    </div>
                    <div className={Styles.inputContainer}>
                        <h2>カード</h2>
                        <h3>マージン</h3>
                        <p><InputRange min={0} max={50} step={1} value={inputCardMargin} onchange={inputCardMarginOnChange} unit={"px"}/></p>
                        <h3>角</h3>
                        <p><InputRange min={0} max={200} step={1} value={inputCardRadius} onchange={inputCardRadiusOnChange} unit={"px"}/></p>
                        <h3>背景色</h3>
                        <p><label><input type="color" value={inputCardBackground} onChange={inputCardBackgroundOnChange}/></label></p>
                        <h3>影</h3>
                        <table>
                            <tr>
                                <th>色</th>
                                <td><label><input type="color" value={inputCardShadowColor} onChange={inputCardShadowColorOnChange}/></label></td>
                            </tr>
                            <tr>
                                <th>ぼかし</th>
                                <td><InputRange min={0} max={200} step={1} value={inputCardShadowBlur} onchange={inputCardShadowBlurOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>横ズレ</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputCardShadowOffsetX} onchange={inputCardShadowOffsetXOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>縦ズレ</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputCardShadowOffsetY} onchange={inputCardShadowOffsetYOnChange} unit={"px"}/></td>
                            </tr>
                        </table>
                    </div>
                    <div className={Styles.inputContainer}>
                        <h2>アイコン</h2>

                        <table>
                            <tr>
                                <th>ファイル</th>
                                <td><label><input type="file" accept={"image/*"} onChange={inputFileOnChange} id={"icon"}/></label></td>
                            </tr>
                            <tr>
                                <th>拡大率</th>
                                <td><InputRange min={0} max={200} step={1} value={inputIconScale} onchange={inputIconScaleOnChange} unit={"%"}/></td>
                            </tr>
                            <tr>
                                <th>角</th>
                                <td><InputRange min={0} max={150} step={1} value={inputIconRadius} onchange={inputIconRadiusOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>縁</th>
                                <td><InputRange min={0} max={50} step={1} value={inputIconBorder} onchange={inputIconBorderOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>横</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputIconOffsetX} onchange={inputIconOffsetXOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>縦</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputIconOffsetY} onchange={inputIconOffsetYOnChange} unit={"px"}/></td>
                            </tr>
                        </table>
                        <h3>影</h3>
                        <table>
                            <tr>
                                <th>色</th>
                                <td><label><input type="color" value={inputIconShadowColor} onChange={inputIconShadowColorOnChange}/></label></td>
                            </tr>
                            <tr>
                                <th>ぼかし</th>
                                <td><InputRange min={0} max={200} step={1} value={inputIconShadowBlur} onchange={inputIconShadowBlurOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>横ズレ</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputIconShadowOffsetX} onchange={inputIconShadowOffsetXOnChange} unit={"px"}/></td>
                            </tr>
                            <tr>
                                <th>縦ズレ</th>
                                <td><InputRange min={-200} max={200} step={1} value={inputIconShadowOffsetY} onchange={inputIconShadowOffsetYOnChange} unit={"px"}/></td>
                            </tr>
                        </table>
                    </div>
                    <div className={Styles.inputContainer}>
                        <h2>名前</h2>
                        <h3>上</h3>
                        <table>
                            <tr>
                                <th>内容</th>
                                <td><input type="text" value={inputNameBig} onChange={inputNameBigOnChange}/></td>
                            </tr>
                            <tr>
                                <th>フォント</th>
                                <td><input type="text" value={inputNameBigFont} onChange={inputNameBigFontOnChange}/></td>
                            </tr>
                            <tr>
                                <th>色</th>
                                <td><input type="color" onChange={inputNameBigColorOnChange}/></td>
                            </tr>
                        </table>
                        <h3>下</h3>
                        <table>
                            <tr>
                                <th>内容</th>
                                <td><input type="text" value={inputNameSmall} onChange={inputNameSmallOnChange}/></td>
                            </tr>
                            <tr>
                                <th>フォント</th>
                                <td><input type="text" value={inputNameSmallFont} onChange={inputNameSmallFontOnChange}/></td>
                            </tr>
                            <tr>
                                <th>色</th>
                                <td><input type="color" onChange={inputNameSmallColorOnChange}/></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
function isElement(o){
    return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && true && o.nodeType === 1 && typeof o.nodeName==="string"
    );
}