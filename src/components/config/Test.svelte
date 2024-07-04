<script>
    import { onMount } from "svelte";
    import { OrgChart } from 'd3-org-chart';
    import {backend_URL} from '../../url'
    import { router } from "tinro";
    export let params;
    let data;
    import AddchildPopup from "./AddchildPopup.svelte";
    let showModal = false;

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }

    var chart = null;
    const getConfigs = new Promise(async (resolve,reject)=>{
        let res = await fetch(`${backend_URL}/config/${params.type}`,{
            headers: {
                "Content-Type": "application/json",
            }
        })
        let result = await res.json();
        result = result.map((r)=>{
            let temp = {...r};
            temp.id = temp._id;
            return temp
        })
        resolve(result)
    })
    getConfigs.then((data)=>{
        chart = new OrgChart()
        .nodeHeight((d) => 85 + 25)
        .nodeWidth((d) => 220 + 2)
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 35)
        .compactMarginPair((d) => 30)
        .neighbourMargin((a, b) => 20)
        .nodeContent(function (d, i, arr, state) {
            const color = '#FFFFFF';
            const imageDiffVert = 25 + 2;
            return `
                    <div style='width:${
                    d.width
                    }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                            <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                                <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${
                                d.data.id
                                }</div>
                                <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
                                <div style="margin-top:${
                                -imageDiffVert - 20
                                }px;"> </div>
                                <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${
                                d.data.key
                                } </div>
                                <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
                                d.data.map
                                } </div>
                                <button onclick={openModal}>Open Modal</button>

                                <AddchildPopup {showModal} close={closeModal}>
                                    <h2>Modal Title</h2>
                                    <p>This is the content of the modal.</p>
                                </AddchildPopup>

                            </div>
                        </div>
                                `;
        })
        .container('.chart-container')
        .data(data)
        .render();
    })

    
    /* onMount(async ()=>{
        data = groupedByType[selectedType]
        console.log(selectedType)
    }) */
    /* if(data){
        chart = new OrgChart()
        .nodeHeight((d) => 85 + 25)
        .nodeWidth((d) => 220 + 2)
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 35)
        .compactMarginPair((d) => 30)
        .neighbourMargin((a, b) => 20)
        .nodeContent(function (d, i, arr, state) {
            const color = '#FFFFFF';
            const imageDiffVert = 25 + 2;
            return  `
                        <div>
                            
                        </div>
                    `
        })
        .container('.chart-container')
        .data(data)
        .render();
    } */

    /* // This is the data used - https://github.com/bumbeishvili/sample-data/blob/main/data-oracle.csv
    d3.csv(
        'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/data-oracle.csv'
    ).then((data) => {
        chart = new OrgChart()
        .nodeHeight((d) => {
            console.log(d)
            return 85 + 25
        })
        .nodeWidth((d) => 220 + 2)
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 35)
        .compactMarginPair((d) => 30)
        .neighbourMargin((a, b) => 20)
        .nodeContent(function (d, i, arr, state) {
            const color = '#FFFFFF';
            const imageDiffVert = 25 + 2;
            return `
                    <div style='width:${
                    d.width
                    }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                            <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                                <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${
                                d.data.id
                                }</div>
                                <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
                                <div style="margin-top:${
                                -imageDiffVert - 20
                                }px;">   <img src=" ${d.data.image}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                                <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${
                                d.data.name
                                } </div>
                                <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
                                d.data.position
                                } </div>

                            </div>
                        </div>
                                `;
        })
        .container('.chart-container')
        .data(data)
        .render();
    }); */
    
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<!-- svelte-ignore non-top-level-reactive-declaration -->
<!-- svelte-ignore non-top-level-reactive-declaration -->
<svelte:head>
	<script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/d3-org-chart@3.1.1"></script>
    <script src="https://cdn.jsdelivr.net/npm/d3-flextree@2.1.2/build/d3-flextree.js"></script>
</svelte:head>

<div>
    <button on:click={()=>{router.goto('/configs')}} >back</button>
</div>
<div class="chart-container"></div>
