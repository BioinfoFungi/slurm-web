/**
 * Generated from 'examples/jsm/nodes/Nodes.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('examples/jsm/nodes/core/Node.js'), require('examples/jsm/nodes/core/TempNode.js'), require('examples/jsm/nodes/core/InputNode.js'), require('examples/jsm/nodes/core/ConstNode.js'), require('examples/jsm/nodes/core/VarNode.js'), require('examples/jsm/nodes/core/StructNode.js'), require('examples/jsm/nodes/core/AttributeNode.js'), require('examples/jsm/nodes/core/FunctionNode.js'), require('examples/jsm/nodes/core/ExpressionNode.js'), require('examples/jsm/nodes/core/FunctionCallNode.js'), require('examples/jsm/nodes/core/NodeLib.js'), require('examples/jsm/nodes/core/NodeUtils.js'), require('examples/jsm/nodes/core/NodeFrame.js'), require('examples/jsm/nodes/core/NodeUniform.js'), require('examples/jsm/nodes/core/NodeBuilder.js'), require('examples/jsm/nodes/inputs/BoolNode.js'), require('examples/jsm/nodes/inputs/IntNode.js'), require('examples/jsm/nodes/inputs/FloatNode.js'), require('examples/jsm/nodes/inputs/Vector2Node.js'), require('examples/jsm/nodes/inputs/Vector3Node.js'), require('examples/jsm/nodes/inputs/Vector4Node.js'), require('examples/jsm/nodes/inputs/ColorNode.js'), require('examples/jsm/nodes/inputs/Matrix3Node.js'), require('examples/jsm/nodes/inputs/Matrix4Node.js'), require('examples/jsm/nodes/inputs/TextureNode.js'), require('examples/jsm/nodes/inputs/CubeTextureNode.js'), require('examples/jsm/nodes/inputs/ScreenNode.js'), require('examples/jsm/nodes/inputs/ReflectorNode.js'), require('examples/jsm/nodes/inputs/PropertyNode.js'), require('examples/jsm/nodes/inputs/RTTNode.js'), require('examples/jsm/nodes/accessors/UVNode.js'), require('examples/jsm/nodes/accessors/ColorsNode.js'), require('examples/jsm/nodes/accessors/PositionNode.js'), require('examples/jsm/nodes/accessors/NormalNode.js'), require('examples/jsm/nodes/accessors/CameraNode.js'), require('examples/jsm/nodes/accessors/LightNode.js'), require('examples/jsm/nodes/accessors/ReflectNode.js'), require('examples/jsm/nodes/accessors/ScreenUVNode.js'), require('examples/jsm/nodes/accessors/ResolutionNode.js'), require('examples/jsm/nodes/math/MathNode.js'), require('examples/jsm/nodes/math/OperatorNode.js'), require('examples/jsm/nodes/math/CondNode.js'), require('examples/jsm/nodes/procedural/NoiseNode.js'), require('examples/jsm/nodes/procedural/CheckerNode.js'), require('examples/jsm/nodes/misc/TextureCubeUVNode.js'), require('examples/jsm/nodes/misc/TextureCubeNode.js'), require('examples/jsm/nodes/misc/NormalMapNode.js'), require('examples/jsm/nodes/misc/BumpMapNode.js'), require('examples/jsm/nodes/utils/BypassNode.js'), require('examples/jsm/nodes/utils/JoinNode.js'), require('examples/jsm/nodes/utils/SwitchNode.js'), require('examples/jsm/nodes/utils/TimerNode.js'), require('examples/jsm/nodes/utils/VelocityNode.js'), require('examples/jsm/nodes/utils/UVTransformNode.js'), require('examples/jsm/nodes/utils/MaxMIPLevelNode.js'), require('examples/jsm/nodes/utils/SpecularMIPLevelNode.js'), require('examples/jsm/nodes/utils/ColorSpaceNode.js'), require('examples/jsm/nodes/utils/SubSlotNode.js'), require('examples/jsm/nodes/effects/BlurNode.js'), require('examples/jsm/nodes/effects/ColorAdjustmentNode.js'), require('examples/jsm/nodes/effects/LuminanceNode.js'), require('examples/jsm/nodes/materials/nodes/RawNode.js'), require('examples/jsm/nodes/materials/nodes/SpriteNode.js'), require('examples/jsm/nodes/materials/nodes/PhongNode.js'), require('examples/jsm/nodes/materials/nodes/StandardNode.js'), require('examples/jsm/nodes/materials/nodes/MeshStandardNode.js'), require('examples/jsm/nodes/materials/NodeMaterial.js'), require('examples/jsm/nodes/materials/SpriteNodeMaterial.js'), require('examples/jsm/nodes/materials/PhongNodeMaterial.js'), require('examples/jsm/nodes/materials/StandardNodeMaterial.js'), require('examples/jsm/nodes/materials/MeshStandardNodeMaterial.js'), require('examples/jsm/nodes/postprocessing/NodePostProcessing.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'examples/jsm/nodes/core/Node.js', 'examples/jsm/nodes/core/TempNode.js', 'examples/jsm/nodes/core/InputNode.js', 'examples/jsm/nodes/core/ConstNode.js', 'examples/jsm/nodes/core/VarNode.js', 'examples/jsm/nodes/core/StructNode.js', 'examples/jsm/nodes/core/AttributeNode.js', 'examples/jsm/nodes/core/FunctionNode.js', 'examples/jsm/nodes/core/ExpressionNode.js', 'examples/jsm/nodes/core/FunctionCallNode.js', 'examples/jsm/nodes/core/NodeLib.js', 'examples/jsm/nodes/core/NodeUtils.js', 'examples/jsm/nodes/core/NodeFrame.js', 'examples/jsm/nodes/core/NodeUniform.js', 'examples/jsm/nodes/core/NodeBuilder.js', 'examples/jsm/nodes/inputs/BoolNode.js', 'examples/jsm/nodes/inputs/IntNode.js', 'examples/jsm/nodes/inputs/FloatNode.js', 'examples/jsm/nodes/inputs/Vector2Node.js', 'examples/jsm/nodes/inputs/Vector3Node.js', 'examples/jsm/nodes/inputs/Vector4Node.js', 'examples/jsm/nodes/inputs/ColorNode.js', 'examples/jsm/nodes/inputs/Matrix3Node.js', 'examples/jsm/nodes/inputs/Matrix4Node.js', 'examples/jsm/nodes/inputs/TextureNode.js', 'examples/jsm/nodes/inputs/CubeTextureNode.js', 'examples/jsm/nodes/inputs/ScreenNode.js', 'examples/jsm/nodes/inputs/ReflectorNode.js', 'examples/jsm/nodes/inputs/PropertyNode.js', 'examples/jsm/nodes/inputs/RTTNode.js', 'examples/jsm/nodes/accessors/UVNode.js', 'examples/jsm/nodes/accessors/ColorsNode.js', 'examples/jsm/nodes/accessors/PositionNode.js', 'examples/jsm/nodes/accessors/NormalNode.js', 'examples/jsm/nodes/accessors/CameraNode.js', 'examples/jsm/nodes/accessors/LightNode.js', 'examples/jsm/nodes/accessors/ReflectNode.js', 'examples/jsm/nodes/accessors/ScreenUVNode.js', 'examples/jsm/nodes/accessors/ResolutionNode.js', 'examples/jsm/nodes/math/MathNode.js', 'examples/jsm/nodes/math/OperatorNode.js', 'examples/jsm/nodes/math/CondNode.js', 'examples/jsm/nodes/procedural/NoiseNode.js', 'examples/jsm/nodes/procedural/CheckerNode.js', 'examples/jsm/nodes/misc/TextureCubeUVNode.js', 'examples/jsm/nodes/misc/TextureCubeNode.js', 'examples/jsm/nodes/misc/NormalMapNode.js', 'examples/jsm/nodes/misc/BumpMapNode.js', 'examples/jsm/nodes/utils/BypassNode.js', 'examples/jsm/nodes/utils/JoinNode.js', 'examples/jsm/nodes/utils/SwitchNode.js', 'examples/jsm/nodes/utils/TimerNode.js', 'examples/jsm/nodes/utils/VelocityNode.js', 'examples/jsm/nodes/utils/UVTransformNode.js', 'examples/jsm/nodes/utils/MaxMIPLevelNode.js', 'examples/jsm/nodes/utils/SpecularMIPLevelNode.js', 'examples/jsm/nodes/utils/ColorSpaceNode.js', 'examples/jsm/nodes/utils/SubSlotNode.js', 'examples/jsm/nodes/effects/BlurNode.js', 'examples/jsm/nodes/effects/ColorAdjustmentNode.js', 'examples/jsm/nodes/effects/LuminanceNode.js', 'examples/jsm/nodes/materials/nodes/RawNode.js', 'examples/jsm/nodes/materials/nodes/SpriteNode.js', 'examples/jsm/nodes/materials/nodes/PhongNode.js', 'examples/jsm/nodes/materials/nodes/StandardNode.js', 'examples/jsm/nodes/materials/nodes/MeshStandardNode.js', 'examples/jsm/nodes/materials/NodeMaterial.js', 'examples/jsm/nodes/materials/SpriteNodeMaterial.js', 'examples/jsm/nodes/materials/PhongNodeMaterial.js', 'examples/jsm/nodes/materials/StandardNodeMaterial.js', 'examples/jsm/nodes/materials/MeshStandardNodeMaterial.js', 'examples/jsm/nodes/postprocessing/NodePostProcessing.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, Node_js, TempNode_js, InputNode_js, ConstNode_js, VarNode_js, StructNode_js, AttributeNode_js, FunctionNode_js, ExpressionNode_js, FunctionCallNode_js, NodeLib_js, NodeUtils_js, NodeFrame_js, NodeUniform_js, NodeBuilder_js, BoolNode_js, IntNode_js, FloatNode_js, Vector2Node_js, Vector3Node_js, Vector4Node_js, ColorNode_js, Matrix3Node_js, Matrix4Node_js, TextureNode_js, CubeTextureNode_js, ScreenNode_js, ReflectorNode_js, PropertyNode_js, RTTNode_js, UVNode_js, ColorsNode_js, PositionNode_js, NormalNode_js, CameraNode_js, LightNode_js, ReflectNode_js, ScreenUVNode_js, ResolutionNode_js, MathNode_js, OperatorNode_js, CondNode_js, NoiseNode_js, CheckerNode_js, TextureCubeUVNode_js, TextureCubeNode_js, NormalMapNode_js, BumpMapNode_js, BypassNode_js, JoinNode_js, SwitchNode_js, TimerNode_js, VelocityNode_js, UVTransformNode_js, MaxMIPLevelNode_js, SpecularMIPLevelNode_js, ColorSpaceNode_js, SubSlotNode_js, BlurNode_js, ColorAdjustmentNode_js, LuminanceNode_js, RawNode_js, SpriteNode_js, PhongNode_js, StandardNode_js, MeshStandardNode_js, NodeMaterial_js, SpriteNodeMaterial_js, PhongNodeMaterial_js, StandardNodeMaterial_js, MeshStandardNodeMaterial_js, NodePostProcessing_js) { 'use strict';

	// TODO: all nodes
	//export { NodePass } from './postprocessing/NodePass.js';

	exports.Node = Node_js.Node;
	exports.TempNode = TempNode_js.TempNode;
	exports.InputNode = InputNode_js.InputNode;
	exports.ConstNode = ConstNode_js.ConstNode;
	exports.VarNode = VarNode_js.VarNode;
	exports.StructNode = StructNode_js.StructNode;
	exports.AttributeNode = AttributeNode_js.AttributeNode;
	exports.FunctionNode = FunctionNode_js.FunctionNode;
	exports.ExpressionNode = ExpressionNode_js.ExpressionNode;
	exports.FunctionCallNode = FunctionCallNode_js.FunctionCallNode;
	exports.NodeLib = NodeLib_js.NodeLib;
	exports.NodeUtils = NodeUtils_js.NodeUtils;
	exports.NodeFrame = NodeFrame_js.NodeFrame;
	exports.NodeUniform = NodeUniform_js.NodeUniform;
	exports.NodeBuilder = NodeBuilder_js.NodeBuilder;
	exports.BoolNode = BoolNode_js.BoolNode;
	exports.IntNode = IntNode_js.IntNode;
	exports.FloatNode = FloatNode_js.FloatNode;
	exports.Vector2Node = Vector2Node_js.Vector2Node;
	exports.Vector3Node = Vector3Node_js.Vector3Node;
	exports.Vector4Node = Vector4Node_js.Vector4Node;
	exports.ColorNode = ColorNode_js.ColorNode;
	exports.Matrix3Node = Matrix3Node_js.Matrix3Node;
	exports.Matrix4Node = Matrix4Node_js.Matrix4Node;
	exports.TextureNode = TextureNode_js.TextureNode;
	exports.CubeTextureNode = CubeTextureNode_js.CubeTextureNode;
	exports.ScreenNode = ScreenNode_js.ScreenNode;
	exports.ReflectorNode = ReflectorNode_js.ReflectorNode;
	exports.PropertyNode = PropertyNode_js.PropertyNode;
	exports.RTTNode = RTTNode_js.RTTNode;
	exports.UVNode = UVNode_js.UVNode;
	exports.ColorsNode = ColorsNode_js.ColorsNode;
	exports.PositionNode = PositionNode_js.PositionNode;
	exports.NormalNode = NormalNode_js.NormalNode;
	exports.CameraNode = CameraNode_js.CameraNode;
	exports.LightNode = LightNode_js.LightNode;
	exports.ReflectNode = ReflectNode_js.ReflectNode;
	exports.ScreenUVNode = ScreenUVNode_js.ScreenUVNode;
	exports.ResolutionNode = ResolutionNode_js.ResolutionNode;
	exports.MathNode = MathNode_js.MathNode;
	exports.OperatorNode = OperatorNode_js.OperatorNode;
	exports.CondNode = CondNode_js.CondNode;
	exports.NoiseNode = NoiseNode_js.NoiseNode;
	exports.CheckerNode = CheckerNode_js.CheckerNode;
	exports.TextureCubeUVNode = TextureCubeUVNode_js.TextureCubeUVNode;
	exports.TextureCubeNode = TextureCubeNode_js.TextureCubeNode;
	exports.NormalMapNode = NormalMapNode_js.NormalMapNode;
	exports.BumpMapNode = BumpMapNode_js.BumpMapNode;
	exports.BypassNode = BypassNode_js.BypassNode;
	exports.JoinNode = JoinNode_js.JoinNode;
	exports.SwitchNode = SwitchNode_js.SwitchNode;
	exports.TimerNode = TimerNode_js.TimerNode;
	exports.VelocityNode = VelocityNode_js.VelocityNode;
	exports.UVTransformNode = UVTransformNode_js.UVTransformNode;
	exports.MaxMIPLevelNode = MaxMIPLevelNode_js.MaxMIPLevelNode;
	exports.SpecularMIPLevelNode = SpecularMIPLevelNode_js.SpecularMIPLevelNode;
	exports.ColorSpaceNode = ColorSpaceNode_js.ColorSpaceNode;
	exports.SubSlotNode = SubSlotNode_js.SubSlotNode;
	exports.BlurNode = BlurNode_js.BlurNode;
	exports.ColorAdjustmentNode = ColorAdjustmentNode_js.ColorAdjustmentNode;
	exports.LuminanceNode = LuminanceNode_js.LuminanceNode;
	exports.RawNode = RawNode_js.RawNode;
	exports.SpriteNode = SpriteNode_js.SpriteNode;
	exports.PhongNode = PhongNode_js.PhongNode;
	exports.StandardNode = StandardNode_js.StandardNode;
	exports.MeshStandardNode = MeshStandardNode_js.MeshStandardNode;
	exports.NodeMaterial = NodeMaterial_js.NodeMaterial;
	exports.SpriteNodeMaterial = SpriteNodeMaterial_js.SpriteNodeMaterial;
	exports.PhongNodeMaterial = PhongNodeMaterial_js.PhongNodeMaterial;
	exports.StandardNodeMaterial = StandardNodeMaterial_js.StandardNodeMaterial;
	exports.MeshStandardNodeMaterial = MeshStandardNodeMaterial_js.MeshStandardNodeMaterial;
	exports.NodePostProcessing = NodePostProcessing_js.NodePostProcessing;

}));
