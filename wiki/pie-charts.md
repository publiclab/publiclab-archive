---
title: Pie charts
tagnames: 
author: warren
path: /wiki/pie-charts.md
nid: 888
uid: 1

---

# Pie charts

by [warren](../profile/warren)

March 05, 2012 22:37 | Tags: 

<style>
div.graph
		{
			width: 400px;
			height: 375px;
		}
</style>

<p>Page for testing pie chart display of contributors for a tool:</p>

<?php
$node = node_load(arg(1));
$tag = explode("/",$node->path);
?>
<p>PLOTS members who have <a href="/note/add?tag=<?php echo $tag[1]; ?>">contributed research notes</a> towards this topic:</p>

<div id="donut" class="graph"></div>

<script type="text/javascript">
var data = [<?php
$tid = taxonomy_get_term_by_name('balloon-mapping');
//$tid = taxonomy_get_term_by_name($tag[1]);
$tid = $tid[0];
$tid = $tid->tid;

$sql = "SELECT n.uid, n.title, n.created FROM {node} n INNER JOIN {term_node} tn ON n.nid = tn.nid WHERE tn.tid=".$tid." AND n.status=1 AND n.type='note'";

$result = db_query($sql);
$users = array();

while ($row = db_fetch_array($result) ) {
  $uid = $row["uid"]; 
  $users[$uid]++;
}

foreach ($users as $uid => $count){
  $user=user_load($uid);
  echo "{ label:'".$user->name."',data: ".$count." },";
}
?>];

$.plot($("#donut"), data,
{
        series: {
            pie: {
                innerRadius: 0.55,
                show: true,
                combine: {
                    color: '#999',
                    threshold: 0.02
                }
            }
        },
        legend: {
            show: false
        }
});
</script>


<p>Testing pie chart display of CERN OHL signatories out of all contributors:</p>

<div id="donut-ohl" class="graph"></div>

<script type="text/javascript">
<?php
$sql = "SELECT n.uid, n.title, n.created FROM {node} n INNER JOIN {term_node} tn ON n.nid = tn.nid WHERE n.status=1 AND n.type='note'";

$result = db_query($sql);
$users = array();

while ($row = db_fetch_array($result) ) {
  $uid = $row["uid"]; 
  $users[$uid]++;
} ?>

//{ label:'signed', data: 1 }

var data = [{ label:'unsigned', data: <?php echo sizeof($users); ?>},{ label:'signed', data: 12}];

$.plot($("#donut-ohl"), data,
{
        series: {
            pie: {
                innerRadius: 0.55,
                show: true,
                combine: {
                    color: '#999',
                    threshold: 0.02
                }
            }
        },
        legend: {
            show: false
        },
	colors: [ "#a00", "#0a0" ]//, "#482344" ]
});
</script>
