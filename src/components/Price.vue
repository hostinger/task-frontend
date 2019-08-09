<template>  
<div class="vertical-center" >
    <div class="flex">
        <span class="vertical-center mid-size-font">$</span>
        <div>
            <div class="flex">
                <div class="column-even vertical-center">
                    <span class="bubble">SAVE 82%</span>
                    <b class="large-size-font">1</b>
                </div>
                <div class="column-even vertical-center">
                    <span class="mid-size-font">45</span>
                    <span class="mid-size-font">/mo</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.vertical-center {
  display: flex;
  justify-items: unset;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
}

.mid-size-font {
 font-size: 10vh;
}
.large-size-font {
    font-size: 40vh;
}
.messages {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 15px;
}

.bubble {
    width: 100px;
    padding: 10px;
    position: relative;
    background: #FD9C9C;
    color: white;
    text-align: center;
    font-weight: bold;
}
.bubble:after {
  content: '';
  position: absolute;
  right: 40%;
  bottom: -10px;
  width: 0;
  height: 0;
  border-top : 10px solid #FD9C9C;
  border-right : 10px solid transparent;
  border-left: 10px solid transparent;
}
</style>
