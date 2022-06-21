var arr = [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]];
let z = document.getElementById('suc');
function f(id) {
    z.innerText = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            
                var bij = 'b' + (i + 1) + (j + 1);
                let but = document.getElementById(bij);
                if (but.style.backgroundColor == "yellow") {
                    but.style.backgroundColor = "rgb(243, 160, 160)";
                } 
    }
    }
    let bxy = document.getElementById(id);
    var x = id[1] - '1', y = id[2] - '1';
    if (arr[x][y] == 1) {
        arr[x][y] = 0;
        bxy.style.backgroundColor = "grey";
        bxy.classList.remove("btn1");
    }
    else {
        arr[x][y] = 1;
        bxy.style.backgroundColor = "rgb(243, 160, 160)";
        bxy.classList.add("btn1");  
    } 
}



//Function to trace path
let N;
function printSolution(sol) {
    let f = 0;
    // if (sol[0][0] == 1) { b11.style.backgroundColor = "yellow"; f = 1; }
    for (var i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (sol[i][j] == 1) {
                var bij = 'b' + (i + 1) + (j + 1);
                let but = document.getElementById(bij);
                but.style.backgroundColor = "yellow"; f = 1;
            }
        }
    }
    if (f == 1) {
        z.innerText = "OOPS!! We lost cheese😔"
    }
}


function isSafe(maze, x, y) {
    return (x >= 0 && x < N && y >= 0
        && y < N && maze[x][y] == 1);
}
function solveMaze(maze) {

    let sol = new Array(N);
    for (var i = 1; i <= 6; i++) {
        for (var j = 1; j <= 6; j++) {
            var x = 'b' + i + j;
            let bij = document.getElementById(x);
            if (bij.style.backgroundColor === "yellow") bij.style.backgroundColor = "rgb(243, 160, 160)";
        }
    }
    // { if (b66.style.backgroundColor === "yellow") b66.style.backgroundColor = "rgb(243, 160, 160)"; }
    for (let i = 0; i < N; i++) {
        sol[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            sol[i][j] = 0;
        }
    }
    if (solveMazeUtil(maze, 0, 0, sol) == false) {
        // alert("SUCCESSFULLY BLOCKED🥳🥳");
        const property = {
            //properties for block success text
            position: "fixed",
            bottom: "50vh",
            right: "40vw",
            color: "aqua",
            border: "7px solid #73AD21",
            backgroundColor: "red",
            fontSize: "2em",
        }
        console.log(z.style);
        z.innerText = "SUCCESSFULLY BLOCKED🥳🥳";
        return false;
    }
    printSolution(sol);
    return true;
}
function solveMazeUtil(maze, x, y, sol) {
    if (x == N - 1 && y == N - 1
        && maze[x][y] == 1) {
        sol[x][y] = 1;
        return true;
    }
    if (isSafe(maze, x, y) == true) {

        if (sol[x][y] == 1)
            return false;
        sol[x][y] = 1;
        if (solveMazeUtil(maze, x + 1, y, sol))
            return true;
        if (solveMazeUtil(maze, x, y + 1, sol))
            return true;
        // if (solveMazeUtil(maze, x - 1, y, sol))
        //     return true;
        // if (solveMazeUtil(maze, x, y - 1, sol))
        //     return true;
        sol[x][y] = 0;
        return false;
    }
    return false;

}



let submit = document.getElementById('submit');
submit.addEventListener("click", () => {
    console.log("Hai");
    N = arr.length;
    solveMaze(arr);
})

let num=Math.floor(Math.random()*30);
for(let i=0;i<num;i++){
    let x=Math.floor(Math.random()*6);
    let y=Math.floor(Math.random()*6);
    console.log(x,y);
   let but= document.getElementById('b'+(x+1)+(y+1));
   console.log('b'+(x+1)+(y+1))
    but.classList.add("pointer-events-none");

}
