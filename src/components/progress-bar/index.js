import style from './style.module.css';

export default function ProgressBar({
  title,
  label,
  percent,
  fill = '#1677ff',
}) {
  return (
    <div className={style.adProgressBar}>
      <div className={style.adProgressBarOuter} style={{ height: 8 }}>
        <div className={style.adProgressBarLabel}>{title}</div>
        <div className={style.adProgressBarInner}>
          <div
            className={style.adProgressBarBg}
            style={{ width: percent, height: 8, backgroundColor: fill }}
          ></div>
        </div>
        <div
          className={style.adProgressBarDesc}
          style={{ width: percent, left: percent, top: 0 }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
