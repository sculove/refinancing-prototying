import type {SVGStyleProps} from '@financial/common-icons';

function IconCloseModal({
    fill = '#222',
    width = '100%',
    height = '100%',
    viewBox = '0 0 30 30',
    style = {},
}: SVGStyleProps) {
  return <svg width={width} height={height} viewBox={viewBox} style={style}>
        <g fill={fill} fillRule="nonzero">
            <path d="m8.272 9.586 13.142 13.142a.93.93 0 1 0 1.314-1.314L9.586 8.272a.93.93 0 0 0-1.314 1.314z" />
            <path d="M22.728 9.586 9.586 22.728a.93.93 0 1 1-1.314-1.314L21.414 8.272a.93.93 0 0 1 1.314 1.314z" />
        </g>
    </svg>;
}

export default IconCloseModal;
