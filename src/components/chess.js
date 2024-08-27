import React from "react";
import './chess.css';
import { FaChessPawn } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";


function Chess(){
    return(
        <div>
            <table>
                <tr>
                    <td class="odd"><FaChessRook /></td>
                    <td class="even"><FaChessKnight /></td>
                    <td class="odd"><FaChessBishop /></td>
                    <td class="even"><FaChessQueen /></td>
                    <td class="odd"><FaChessKing /></td>
                    <td class="even"><FaChessBishop /></td>
                    <td class="odd"><FaChessKnight /></td>
                    <td class="even"><FaChessRook /></td>
                </tr>
                <tr>
                    <td class="even"><FaChessPawn /></td>
                    <td class="odd"><FaChessPawn /></td>
                    <td class="even"><FaChessPawn /></td>
                    <td class="odd"><FaChessPawn /></td>
                    <td class="even"><FaChessPawn /></td>
                    <td class="odd"><FaChessPawn /></td>
                    <td class="even"><FaChessPawn /></td>
                    <td class="odd"><FaChessPawn /></td>
                </tr>
                <tr>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                </tr>
                <tr>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                </tr>
                <tr>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                </tr>
                <tr>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                    <td class="even"></td>
                    <td class="odd"></td>
                </tr>
                <tr className="whitechess">
                    <td class="odd"><FaRegChessPawn /></td>
                    <td class="even"><FaRegChessPawn /></td>
                    <td class="odd"><FaRegChessPawn /></td>
                    <td class="even"><FaRegChessPawn /></td>
                    <td class="odd"><FaRegChessPawn /></td>
                    <td class="even"><FaRegChessPawn /></td>
                    <td class="odd"><FaRegChessPawn /></td>
                    <td class="even"><FaRegChessPawn /></td>
                </tr>
                <tr>
                    <td class="even"><FaRegChessRook /></td>
                    <td class="odd"><FaRegChessKnight /></td>
                    <td class="even"><FaRegChessBishop /></td>
                    <td class="odd"><FaRegChessQueen /></td>
                    <td class="even"><FaRegChessKing /></td>
                    <td class="odd"><FaRegChessBishop /></td>
                    <td class="even"><FaRegChessKnight /></td>
                    <td class="odd"><FaRegChessRook /></td>
                </tr>
            </table>
        </div>
    )
}

export default Chess;