import type {SVGStyleProps} from '@financial/common-icons';

function IconCheckRound({
    fill = '#000',
    width = '100%',
    height = '100%',
    viewBox = '0 0 15 11',
    style = {},
}: SVGStyleProps) {
  return <svg width={width} height={height} viewBox={viewBox} style={style}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M5.017 10.945a.848.848 0 0 1-.605-.252L.25 6.488a.865.865 0 0 1 0-1.22.848.848 0 0 1 1.207 0l3.56 3.594 8.525-8.61a.848.848 0 0 1 1.208 0 .864.864 0 0 1 0 1.22L5.62 10.693a.848.848 0 0 1-.604.253"
        />
    </svg>;
}

export default IconCheckRound;
