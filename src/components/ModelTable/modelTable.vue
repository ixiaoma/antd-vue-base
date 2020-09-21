
<template>
  <div class="modelTable">
    <a-modal
      width='80%'
      title="请选择"
      :visible="visible"
    >
        <a-card :bordered="false" v-if='!pageLoading'>
            <table-filter :filterList='filterList' @refresh='searchRefresh'/> 
            <s-table
                ref="table"
                rowKey="id"
                :columns="columns"
                :data="loadData"
                :customRow="(record)=>{customRowFn(record)}"
                :scroll='{x:true}'/>
        </a-card>
    </a-modal>
  </div>
</template>

<script src="./modelTable.js"></script>