import React, { Component } from 'react';
import * as math from 'mathjs';

import { InlineMath, BlockMath } from 'react-katex';

import { InputNumber, Input } from 'antd';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

import './App.css';
import 'katex/dist/katex.min.css';
import "antd/dist/antd.css";

const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {

  state = {
    matrix: [
      [1, 2],
      [3, 4]],
    vector: [5, 6]
  }

  updateMatrix(row, col, value) {
    let updated = this.state.matrix.slice(0);
    updated[row][col] = +value.target.value;
    this.setState({
      matrix: updated
    });
  }

  updateVector(row, value) {
    let updated = this.state.vector.slice(0);
    updated[row] = +value.target.value;
    this.setState({
      vector: updated
    })
  }

  render() {
    const matrix = this.state.matrix;
    const vector = this.state.vector;

    const det = math.number(matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]);
    const oneOverDet = math.fraction(1, det);

    const inverseStr = [];
    const inverse = [];
    for (const value of [matrix[1][1], -matrix[0][1], -matrix[1][0], matrix[0][0]]) {
      const frac = math.multiply(oneOverDet, value);
      inverse.push(frac);
      inverseStr.push(frac.d === 1 ? (frac.s === -1 ? "-" : "") + frac.n : ("\\frac{" + (frac.s === -1 ? "-" : "") + frac.n + "}{" + frac.d + "}"));
    }
    const sol = [
      math.add(math.multiply(inverse[0], vector[0]), math.multiply(inverse[1], vector[1])),
      math.add(math.multiply(inverse[2], vector[0]), math.multiply(inverse[3], vector[1]))
    ];
    const solStr = [];
    for (const frac of sol) {
      solStr.push(frac.d === 1 ? (frac.s === -1 ? "-" : "") + frac.n : ("\\frac{" + (frac.s === -1 ? "-" : "") + frac.n + "}{" + frac.d + "}"));
    }

    const inverseMatStr = "\\begin{bmatrix}" + inverseStr[0] + " & " + inverseStr[1] + " \\\\ " + inverseStr[2] + " & " + inverseStr[3] + " \\end{bmatrix}";
    const matStr = "\\begin{bmatrix}" + matrix[0][0] + " & " + matrix[0][1] + " \\\\ " + matrix[1][0] + " & " + matrix[1][1] + " \\end{bmatrix}";
    const vecStr = "\\begin{bmatrix}" + vector[0] + " \\\\ " + vector[1] + " \\end{bmatrix}";

    return (
      <Layout style={{ height: "100%" }}>
        <Header>
          <h1 style={{ color: "white" }}>Solve That System</h1>
        </Header>
        <Content>
          <div style={{ width: 500, margin: "0px auto" }}>
            <Row type="flex" justify="center" align="middle" style={{ padding: 2 }}>
              <Col>
                Here's a trick I learned in linear algebra for solving a system of two equations in two variables using an inverse matrix. This method actually works for any square system, but finding the inverses of higher rank matrices is significantly less straightforward.
              </Col>
            </Row>
            <BlockMath>{"\\text{Equations}"}</BlockMath>
            <Row type="flex" justify="center" align="middle" style={{ padding: 2 }}>
              <Col>
                <Input size="small" style={{ width: 30 }} value={matrix[0][0]} onChange={(value) => this.updateMatrix(0, 0, value)} />
              </Col>
              <Col>
                <InlineMath>\thickspace x_1 +\thickspace</InlineMath>
              </Col>
              <Col>
                <Input size="small" style={{ width: 30 }} value={matrix[0][1]} onChange={(value) => this.updateMatrix(0, 1, value)} />
              </Col>
              <Col>
                <InlineMath>\thickspace x_2</InlineMath>
                <InlineMath>\thickspace=\thickspace</InlineMath>
              </Col>
              <Col>
                <Input size="small" style={{ width: 30 }} value={vector[0]} onChange={(value) => this.updateVector(0, value)} />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="middle" style={{ padding: 2 }}>
              <Col>
                <Input size="small" style={{ width: 30 }} value={matrix[1][0]} onChange={(value) => this.updateMatrix(1, 0, value)} />
              </Col>
              <Col>
                <InlineMath>\thickspace x_1 +\thickspace</InlineMath>
              </Col>
              <Col>
                <Input size="small" style={{ width: 30 }} value={matrix[1][1]} onChange={(value) => this.updateMatrix(1, 1, value)} />
              </Col>
              <Col>
                <InlineMath>\thickspace x_2</InlineMath>
                <InlineMath>\thickspace=\thickspace</InlineMath>
              </Col>
              <Col>
                <Input size="small" style={{ width: 30 }} value={vector[1]} onChange={(value) => this.updateVector(1, value)} />
              </Col>
            </Row>

            <BlockMath>{"\\text{Definitions}"}</BlockMath>
            <BlockMath>{"A\\vec{x} = \\vec{b} \\ni A = " + matStr + "\\text{and } \\vec{b} = " + vecStr}</BlockMath>
            <BlockMath>{"A^{-1} = \\dfrac{1}{ac-bd} \\begin{bmatrix}d & -b \\\\ -c & a \\end{bmatrix} \\ni A = \\begin{bmatrix}a & b \\\\ c & d \\end{bmatrix}"}</BlockMath>
            <BlockMath>{"A\\vec{b} = \\begin{bmatrix}ae + bf \\\\ ce + df \\end{bmatrix} \\ni A = \\begin{bmatrix}a & b \\\\ c & d \\end{bmatrix} \\text{and } \\vec{b} = \\begin{bmatrix}e \\\\ f \\end{bmatrix}"}</BlockMath>
            <BlockMath>{"A^{-1}A = 1"}</BlockMath>
            <BlockMath>{"\\vec{x} = A^{-1}\\vec{b}"}</BlockMath>

            <BlockMath>{"\\text{Solution}"}</BlockMath>
            <BlockMath>{matStr + "\\vec{x} = " + vecStr}</BlockMath>
            <BlockMath>{"A^{-1} = \\dfrac{1}{" + matrix[0][0] + " \\cdot " + matrix[1][1] + "-" + matrix[0][1] + " \\cdot " + matrix[1][0] + "} " +
              "\\begin{bmatrix}" + matrix[1][1] + " & -" + matrix[0][1] + " \\\\ -" + matrix[1][0] + " & " + matrix[0][0] + " \\end{bmatrix}".replace("--", "") +
              "= \\dfrac{1}{" + det + "} \\begin{bmatrix}" + matrix[1][1] + " & -" + matrix[0][1] + " \\\\ -" + matrix[1][0] + " & " + matrix[0][0] + " \\end{bmatrix}" +
              "= " + inverseMatStr}</BlockMath>
            <BlockMath>{"\\vec{x} = " + inverseMatStr + vecStr + " = " +
              "\\begin{bmatrix}" + inverseStr[0] + "\\cdot " + vector[0] + "+ " + inverseStr[1] + "\\cdot " + vector[1] + " \\\\ " + inverseStr[2] + "\\cdot " + vector[0] + "+ " + inverseStr[3] + "\\cdot " + vector[1] + " \\end{bmatrix}" +
              "= \\begin{bmatrix} " + solStr[0] + " \\\\ " + solStr[1] + " \\end{bmatrix}"}</BlockMath>
          </div>
        </Content>
        <Footer>(C) Quantum Development - 2019</Footer>
      </Layout>
    );
  }
}

export default App;
