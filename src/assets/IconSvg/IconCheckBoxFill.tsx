import type {SVGStyleProps} from '@financial/common-icons';

function IconCheckBoxFill({
    fill = '#09AA5C',
    width = '100%',
    height = '100%',
    viewBox = '0 0 22 22',
    style = {},
}: SVGStyleProps) {
  return <svg width={width} height={height} viewBox={viewBox} style={style}>
        <g fill="none" fillRule="evenodd">
            <circle fill={fill} cx="11" cy="11" r="11" />
            <path
                d="M9.013 15.429a.686.686 0 0 1-.483-.198L5.2 11.937a.67.67 0 0 1 0-.954.688.688 0 0 1 .966 0l2.847 2.814 6.82-6.743a.688.688 0 0 1 .966 0 .67.67 0 0 1 0 .955l-7.302 7.222a.686.686 0 0 1-.484.198"
                fill="#FFF"
            />
        </g>
    </svg>;
}

export default IconCheckBoxFill;
