import type {SVGStyleProps} from '@financial/common-icons';

function IconCheck({
    width = '100%',
    height = '100%',
    viewBox = '0 0 18 15',
    fill = '#09aa5c',
    style = {},
}: SVGStyleProps) {
  return <svg width={width} height={height} viewBox={viewBox} style={style}>
        <path
            d="M6.351 13.999a.892.892 0 0 1-.644-.276l-4.44-4.61A.962.962 0 0 1 1 8.442c0-.25.096-.491.266-.667a.887.887 0 0 1 1.288 0l3.797 3.94 9.094-9.439a.887.887 0 0 1 1.288 0 .96.96 0 0 1 .267.668.96.96 0 0 1-.267.669L6.996 13.723A.893.893 0 0 1 6.35 14"
            fill={fill}
            stroke={fill}
            strokeWidth=".5"
            fillRule="evenodd"
        />
    </svg>;
}

export default IconCheck;
