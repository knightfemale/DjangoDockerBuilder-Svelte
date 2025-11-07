<script>
    import { onMount } from "svelte";
    
    let backendData = "正在请求后端...";
    
    onMount(() => {
        fetch("/api/core/hello")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`网络响应不正常 (${response.status})`);
                }
                return response.text();
            })
            .then((text) => {
                backendData = text;
            })
            .catch((error) => {
                backendData = `无法从后端加载数据: ${error.message}`;
            });
    });
</script>

<p class="text-3xl font-bold">后端请求测试:</p>
<p class="text-3xl underline">{backendData}</p>
