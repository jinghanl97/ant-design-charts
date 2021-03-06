
import { TreeGraphData, GraphData, StateStyles, ShapeStyle } from '@antv/g6/lib/types';
import { IGraph } from '@antv/g6/lib/interface/graph';
import { INode, IEdge } from '@antv/g6/lib/interface/item';



export interface MiniMapConfig{
  show?: boolean;
  viewportClassName?: string;
  type?: 'default' | 'keyShape' | 'delegate';
  size?: number[];
  delegateStyle?: ShapeStyle;
  refresh?: boolean;
  padding?: number;
}

export interface RelationGraph {
  style?: React.CSSProperties;
  className?: string;
  data: TreeGraphData | GraphData;
  width?: number;
  height?: number;
  nodeType?: string;
  edgeType?: string;
  nodeStyle?: ShapeStyle;
  edgeStyle?: ShapeStyle;
  nodeStateStyles?: StateStyles;
  edgeStateStyles?: StateStyles;
  nodeSize?: number | number[];
  nodeLabelCfg?: {
    style: {
      stroke?: string;
      fontSize?: number;
    }
  };
  edgeLabelCfg?: {
    style: {
      stroke?: string;
      fontSize?: number;
    }
  };
  nodeAnchorPoints?: number[][];
  behaviors?: string[];
  layout?: any;
  enableEdit?: boolean;
  minimapCfg?: MiniMapConfig;
  handleNodeClick?: (item: INode, graph: IGraph) => void;
  handleEdgeClick?: (item: IEdge, graph: IGraph) => void;
  handleNodeHover?: (item: INode, graph: IGraph) => void;
  handleNodeUnHover?: (item: INode, graph: IGraph) => void;
  handleEdgeHover?: (item: IEdge, graph: IGraph) => void;
  handleEdgeUnHover?: (item: IEdge, graph: IGraph) => void;
  collapseExpand?: boolean;
  colorMap?: Object;
}