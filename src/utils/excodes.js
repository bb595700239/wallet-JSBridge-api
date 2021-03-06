/**
 * Created by Administrator on 2019/1/15.
 */

export default [
  {
    "name": "network_error",
    "code": "0",
    "en": "network error"
  },
  {
    "name": "database_exception",
    "code": "3010000",
    "en": "Database exception"
  },
  {
    "name": "block_validate_exception",
    "code": "3020000",
    "en": "block validation exception"
  },
  {
    "name": "unlinkable_block_exception",
    "code": "3020001",
    "en": "Unlinkable block"
  },
  {
    "name": "block_tx_output_exception",
    "code": "3020002",
    "en": "Transaction outputs in block do not match transaction outputs from applying block"
  },
  {
    "name": "block_concurrency_exception",
    "code": "3020003",
    "en": "Block does not guarantee concurrent execution without conflicts"
  },
  {
    "name": "block_lock_exception",
    "code": "3020004",
    "en": "Shard locks in block are incorrect or mal-formed"
  },
  {
    "name": "block_resource_exhausted",
    "code": "3020005",
    "en": "Block exhausted allowed resources"
  },
  {
    "name": "block_too_old_exception",
    "code": "3020006",
    "en": "Block is too old to push"
  },
  {
    "name": "block_from_the_future",
    "code": "3020007",
    "en": "Block is from the future"
  },
  {
    "name": "wrong_signing_key",
    "code": "3020008",
    "en": "Block is not signed with expected key"
  },
  {
    "name": "wrong_producer",
    "code": "3020009",
    "en": "Block is not signed by expected producer"
  },
  {
    "name": "transaction_exception",
    "code": "3030000",
    "en": "transaction validation exception"
  },
  {
    "name": "tx_duplicate",
    "code": "3030001",
    "en": "duplicate transaction"
  },
  {
    "name": "tx_decompression_error",
    "code": "3030002",
    "en": "Error decompressing transaction"
  },
  {
    "name": "expired_tx_exception",
    "code": "3030003",
    "en": "Expired Transaction"
  },
  {
    "name": "tx_exp_too_far_exception",
    "code": "3030004",
    "en": "Transaction Expiration Too Far"
  },
  {
    "name": "invalid_ref_block_exception",
    "code": "3030005",
    "en": "Invalid Reference Block"
  },
  {
    "name": "tx_apply_exception",
    "code": "3030006",
    "en": "Transaction Apply Exception"
  },
  {
    "name": "tx_receipt_inconsistent_status",
    "code": "3030007",
    "en": "Transaction receipt applied status does not match received status."
  },
  {
    "name": "tx_no_action",
    "code": "3030008",
    "en": "transaction should have at least one normal action.",
    "cn": "每笔交易至少需要有一个操作。"
  },
  {
    "name": "deadline_exception",
    "code": "3030009",
    "en": "transaction is timeout."
  },
  {
    "name": "max_charge_exceeded_exception",
    "code": "3030010",
    "en": "exceeded max charge paid",
    "cn": "交易所需要的手续费超出了最大手续费设定。"
  },
  {
    "name": "charge_exceeded_exception",
    "code": "3030011",
    "en": "exceeded remaining EVT & Pinned EVT tokens",
    "cn": "交易所需要的手续费超出了指定付款人的余额。"
  },
  {
    "name": "payer_exception",
    "code": "3030012",
    "en": "Invalid payer",
    "cn": "指定的付款者不合法。"
  },
  {
    "name": "too_many_tx_at_once",
    "code": "3030013",
    "en": "Pushing too many transactions at once"
  },
  {
    "name": "tx_too_big",
    "code": "3030014",
    "en": "Transaction is too big",
    "cn": "交易的内容太大。"
  },
  {
    "name": "unknown_transaction_compression",
    "code": "3030015",
    "en": "Unknown transaction compression"
  },
  {
    "name": "action_exception",
    "code": "3040000",
    "en": "action exception"
  },
  {
    "name": "action_authorize_exception",
    "code": "3040001",
    "en": "invalid action authorization",
    "cn": "操作的授权不合法。"
  },
  {
    "name": "action_args_exception",
    "code": "3040002",
    "en": "Invalid arguments for action",
    "cn": "操作的参数不合法。"
  },
  {
    "name": "name_reserved_exception",
    "code": "3040003",
    "en": "Name is reserved.",
    "cn": "这个名称不能在这里使用。"
  },
  {
    "name": "address_reserved_exception",
    "code": "3040004",
    "en": "Address is reserved."
  },
  {
    "name": "domain_exception",
    "code": "3040100",
    "en": "Domain exception"
  },
  {
    "name": "unknown_domain_exception",
    "code": "3040101",
    "en": "Domain does not exist.",
    "cn": "该域并不存在。"
  },
  {
    "name": "domain_duplicate_exception",
    "code": "3040102",
    "en": "Domain already exists.",
    "cn": "同名的域已经存在。"
  },
  {
    "name": "domain_name_exception",
    "code": "3040103",
    "en": "Invalid domain name",
    "cn": "域名不合规。"
  },
  {
    "name": "token_exception",
    "code": "3040200",
    "en": "Token exception"
  },
  {
    "name": "unknown_token_exception",
    "code": "3040201",
    "en": "Token does not exist.",
    "cn": "该通证并不存在。"
  },
  {
    "name": "token_duplicate_exception",
    "code": "3040202",
    "en": "Token already exists.",
    "cn": "同名的通证已经存在。"
  },
  {
    "name": "token_name_exception",
    "code": "3040203",
    "en": "Invalid token name",
    "cn": "通证名字不合规。"
  },
  {
    "name": "token_owner_exception",
    "code": "3040204",
    "en": "Token owner cannot be empty.",
    "cn": "通证的所有者不能为空。"
  },
  {
    "name": "token_destroyed_exception",
    "code": "3040205",
    "en": "Token is destroyed.",
    "cn": "该通证已经被销毁，不能使用。"
  },
  {
    "name": "token_locked_exception",
    "code": "3040206",
    "en": "Locked token cannot be transfered.",
    "cn": "该通证已经被锁定，不能被转移。"
  },
  {
    "name": "token_cannot_destroy_exception",
    "code": "3040207",
    "en": "Token in this domain cannot be destroyed.",
    "cn": "该域的通证不能被销毁。"
  },
  {
    "name": "group_exception",
    "code": "3040300",
    "en": "Group exception"
  },
  {
    "name": "unknown_group_exception",
    "code": "3040301",
    "en": "Group does not exist.",
    "cn": "该组并不存在。"
  },
  {
    "name": "group_duplicate_exception",
    "code": "3040302",
    "en": "Group already exists.",
    "cn": "同名的组已经存在。"
  },
  {
    "name": "group_name_exception",
    "code": "3040303",
    "en": "Invalid group name",
    "cn": "组的名字不合规。"
  },
  {
    "name": "group_key_exception",
    "code": "3040304",
    "en": "Group key is reserved to update this group.",
    "cn": "控制该组的公钥不合规，只能使用普通公钥。"
  },
  {
    "name": "fungible_exception",
    "code": "3040400",
    "en": "Fungible exception"
  },
  {
    "name": "unknown_fungible_exception",
    "code": "3040401",
    "en": "Fungible asset does not exist.",
    "cn": "该代币并不存在。"
  },
  {
    "name": "fungible_duplicate_exception",
    "code": "3040402",
    "en": "Fungible asset already exists.",
    "cn": "同资产编号的代币已经存在。"
  },
  {
    "name": "fungible_name_exception",
    "code": "3040403",
    "en": "Invalid fungible asset name",
    "cn": "代币的名称并不合规。"
  },
  {
    "name": "fungible_symbol_exception",
    "code": "3040404",
    "en": "Invalid fungible asset symbol",
    "cn": "代币的资产简称并不合规。"
  },
  {
    "name": "fungible_supply_exception",
    "code": "3040405",
    "en": "Invalid fungible supply",
    "cn": "代币的供应总量不合规。"
  },
  {
    "name": "fungible_address_exception",
    "code": "3040406",
    "en": "Invalid address",
    "cn": "代币地址不合规。"
  },
  {
    "name": "math_overflow_exception",
    "code": "3040407",
    "en": "Operations resulted in overflow.",
    "cn": "操作过程中出现了溢出的问题。"
  },
  {
    "name": "balance_exception",
    "code": "3040408",
    "en": "Not enough balance left.",
    "cn": "可用余额不足。"
  },
  {
    "name": "suspend_exception",
    "code": "3040500",
    "en": "Suspend exception"
  },
  {
    "name": "unknown_suspend_exception",
    "code": "3040501",
    "en": "Suspend transaction does not exist.",
    "cn": "该挂起交易并不存在。"
  },
  {
    "name": "suspend_duplicate_exception",
    "code": "3040502",
    "en": "Suspend transaction already exists.",
    "cn": "同名的挂起交易已经存在。"
  },
  {
    "name": "suspend_status_exception",
    "code": "3040503",
    "en": "Suspend transaction is not in proper status.",
    "cn": "该挂起交易的状态不支持执行此操作。"
  },
  {
    "name": "suspend_proposer_key_exception",
    "code": "3040504",
    "en": "Proposer needs to sign his key.",
    "cn": "挂起交易的提出者需要对其签名。"
  },
  {
    "name": "suspend_duplicate_key_exception",
    "code": "3040505",
    "en": "Same keys are already signed this suspend transaction.",
    "cn": "已经有同样的公钥签名了此挂起交易。"
  },
  {
    "name": "suspend_expired_tx_exception",
    "code": "3040506",
    "en": "Suspend transaction is expired.",
    "cn": "该挂起交易已经过期，不能被执行。"
  },
  {
    "name": "suspend_not_required_keys_exception",
    "code": "3040507",
    "en": "Provided keys are not required.",
    "cn": "签名的公钥并没有被此挂起交易需要。"
  },
  {
    "name": "suspend_executor_exception",
    "code": "3040508",
    "en": "Invalid executor.",
    "cn": "该执行者并不合法。"
  },
  {
    "name": "suspend_invalid_action_exception",
    "code": "3040509",
    "en": "Action is not valid for suspend transaction.",
    "cn": "此操作并不可以用于挂起交易。"
  },
  {
    "name": "proposal_name_exception",
    "code": "3040510",
    "en": "Invalid proposal name",
    "cn": "提案名称不合法。"
  },
  {
    "name": "meta_exception",
    "code": "3040600",
    "en": "Meta exception"
  },
  {
    "name": "meta_key_exception",
    "code": "3040601",
    "en": "Invalid meta key",
    "cn": "元数据的Key不合法。"
  },
  {
    "name": "meta_value_exception",
    "code": "3040602",
    "en": "Invalid meta value",
    "cn": "元数据的值不合法。"
  },
  {
    "name": "meta_involve_exception",
    "code": "3040603",
    "en": "Creator is not involved.",
    "cn": "元数据的写入者不合法。"
  },
  {
    "name": "evt_link_exception",
    "code": "3040700",
    "en": "EVT-Link exception"
  },
  {
    "name": "evt_link_no_key_exception",
    "code": "3040701",
    "en": "Specific segment key is not in this evt-link.",
    "cn": "EvtLink的结构不完整。"
  },
  {
    "name": "evt_link_version_exception",
    "code": "3040702",
    "en": "EVT-Link version is not valid.",
    "cn": "EvtLink版本号较低，不能被执行。"
  },
  {
    "name": "evt_link_id_exception",
    "code": "3040703",
    "en": "EVT-Link id is not valid.",
    "cn": "EvtLink中的Link ID不合法。"
  },
  {
    "name": "evt_link_dupe_exception",
    "code": "3040704",
    "en": "Duplicate EVT-Link.",
    "cn": "EvtLink已经被执行。"
  },
  {
    "name": "evt_link_type_exception",
    "code": "3040705",
    "en": "Invalid EVT-Link type.",
    "cn": "EvtLink类型错误。"
  },
  {
    "name": "evt_link_expiration_exception",
    "code": "3040706",
    "en": "EVT-Link is expired.",
    "cn": "EvtLink已经过期。"
  },
  {
    "name": "evt_link_existed_exception",
    "code": "3040707",
    "en": "EVT-Link is not existed.",
    "cn": "EvtLink不存在。"
  },
  {
    "name": "everipass_exception",
    "code": "3040708",
    "en": "everiPass failed.",
    "cn": "everiPass失败。"
  },
  {
    "name": "everipay_exception",
    "code": "3040709",
    "en": "everiPay failed.",
    "cn": "everiPay失败。"
  },
  {
    "name": "prodvote_exception",
    "code": "3040800",
    "en": "Producer vote exception"
  },
  {
    "name": "prodvote_key_exception",
    "code": "3040801",
    "en": "Unknown prodvote conf key."
  },
  {
    "name": "prodvote_value_exception",
    "code": "3040802",
    "en": "Invalid prodvote conf value."
  },
  {
    "name": "prodvote_producer_exception",
    "code": "3040803",
    "en": "Invalid producer."
  },
  {
    "name": "lock_exception",
    "code": "3040900",
    "en": "Lock assets exception"
  },
  {
    "name": "unknown_lock_exception",
    "code": "3040901",
    "en": "Unknown lock assets proposal",
    "cn": "该锁定资产提案不存在。"
  },
  {
    "name": "lock_duplicate_exception",
    "code": "3040902",
    "en": "Lock assets proposal already exists.",
    "cn": "同名的锁定资产提案已经存在。"
  },
  {
    "name": "lock_unlock_time_exception",
    "code": "3040903",
    "en": "Invalid unlock time.",
    "cn": "解锁时间不合法。"
  },
  {
    "name": "lock_deadline_exception",
    "code": "3040904",
    "en": "Invalid deadline.",
    "cn": "解锁的截止时间不合法。"
  },
  {
    "name": "lock_assets_exception",
    "code": "3040905",
    "en": "Invalid lock assets.",
    "cn": "将要锁定的资产不合法。"
  },
  {
    "name": "lock_address_exception",
    "code": "3040906",
    "en": "Invalid lock address.",
    "cn": "将要锁定资产的地址不合法。"
  },
  {
    "name": "lock_condition_exception",
    "code": "3040907",
    "en": "Invalid lock condition.",
    "cn": "锁定资产的条件不合法。"
  },
  {
    "name": "lock_expired_exception",
    "code": "3040908",
    "en": "Lock assets proposal is expired.",
    "cn": "该锁定资产的提案已经过期。"
  },
  {
    "name": "lock_aprv_data_exception",
    "code": "3040909",
    "en": "Approve data is not valid.",
    "cn": "授权锁定资产的数据不合法。"
  },
  {
    "name": "lock_duplicate_key_exception",
    "code": "3040910",
    "en": "Some keys are already signed this lock assets proposal.",
    "cn": "同样的公钥已经授权过该锁定资产提案。"
  },
  {
    "name": "lock_not_reach_unlock_time",
    "code": "3040911",
    "en": "Unlock time is not reach.",
    "cn": "还没有到达解锁时间，不能解锁资产。"
  },
  {
    "name": "lock_not_reach_deadline",
    "code": "3040912",
    "en": "Deadline is not reach.",
    "cn": "解锁条件未满足，同时还没有到达解锁时间，该资产依然被锁定。"
  },
  {
    "name": "producer_exception",
    "code": "3050000",
    "en": "Producer exception"
  },
  {
    "name": "producer_priv_key_not_found",
    "code": "3050001",
    "en": "Producer private key is not available"
  },
  {
    "name": "missing_pending_block_state",
    "code": "3050002",
    "en": "Pending block state is missing"
  },
  {
    "name": "producer_double_confirm",
    "code": "3050003",
    "en": "Producer is double confirming known range"
  },
  {
    "name": "producer_schedule_exception",
    "code": "3050004",
    "en": "Producer schedule exception"
  },
  {
    "name": "producer_not_in_schedule",
    "code": "3050005",
    "en": "The producer is not part of current schedule"
  },
  {
    "name": "snapshot_directory_not_found_exception",
    "code": "3050006",
    "en": "The configured snapshot directory does not exist"
  },
  {
    "name": "snapshot_exists_exception",
    "code": "3050007",
    "en": "The requested snapshot already exists"
  },
  {
    "name": "block_log_exception",
    "code": "3060000",
    "en": "Block log exception"
  },
  {
    "name": "block_log_unsupported_version",
    "code": "3060001",
    "en": "unsupported version of block log"
  },
  {
    "name": "block_log_append_fail",
    "code": "3060002",
    "en": "fail to append block to the block log"
  },
  {
    "name": "block_log_not_found",
    "code": "3060003",
    "en": "block log can not be found"
  },
  {
    "name": "block_log_backup_dir_exist",
    "code": "3060004",
    "en": "block log backup dir already exists"
  },
  {
    "name": "fork_database_exception",
    "code": "3080000",
    "en": "Fork database exception"
  },
  {
    "name": "fork_db_block_not_found",
    "code": "3080001",
    "en": "Block can not be found"
  },
  {
    "name": "reversible_blocks_exception",
    "code": "3090000",
    "en": "Reversible Blocks exception"
  },
  {
    "name": "invalid_reversible_blocks_dir",
    "code": "3090001",
    "en": "Invalid reversible blocks directory"
  },
  {
    "name": "reversible_blocks_backup_dir_exist",
    "code": "3090002",
    "en": "Backup directory for reversible blocks already existg"
  },
  {
    "name": "gap_in_reversible_blocks_db",
    "code": "3090003",
    "en": "Gap in the reversible blocks database"
  },
  {
    "name": "misc_exception",
    "code": "3100000",
    "en": "Miscellaneous exception"
  },
  {
    "name": "unknown_block_exception",
    "code": "3100002",
    "en": "unknown block"
  },
  {
    "name": "unknown_transaction_exception",
    "code": "3100003",
    "en": "unknown transaction"
  },
  {
    "name": "fixed_reversible_db_exception",
    "code": "3100004",
    "en": "Corrupted reversible block database was fixed."
  },
  {
    "name": "extract_genesis_state_exception",
    "code": "3100005",
    "en": "extracted genesis state from blocks.log"
  },
  {
    "name": "unsupported_feature",
    "code": "3100006",
    "en": "Feature is currently unsupported"
  },
  {
    "name": "node_management_success",
    "code": "3100007",
    "en": "Node management operation successfully executed"
  },
  {
    "name": "authorization_exception",
    "code": "3110000",
    "en": "Authorization exception"
  },
  {
    "name": "tx_duplicate_sig",
    "code": "3110001",
    "en": "Duplicate signature is included."
  },
  {
    "name": "tx_irrelevant_sig",
    "code": "3110002",
    "en": "Irrelevant signature is included."
  },
  {
    "name": "unsatisfied_authorization",
    "code": "3110003",
    "en": "Provided keys do not satisfy declared authorizations."
  },
  {
    "name": "chain_type_exception",
    "code": "3120000",
    "en": "chain type exception"
  },
  {
    "name": "name_type_exception",
    "code": "3120001",
    "en": "Invalid name"
  },
  {
    "name": "public_key_type_exception",
    "code": "3120002",
    "en": "Invalid public key"
  },
  {
    "name": "private_key_type_exception",
    "code": "3120003",
    "en": "Invalid private key"
  },
  {
    "name": "authority_type_exception",
    "code": "3120004",
    "en": "Invalid authority"
  },
  {
    "name": "action_type_exception",
    "code": "3120005",
    "en": "Invalid action"
  },
  {
    "name": "transaction_type_exception",
    "code": "3120006",
    "en": "Invalid transaction"
  },
  {
    "name": "abi_type_exception",
    "code": "3120007",
    "en": "Invalid ABI"
  },
  {
    "name": "block_id_type_exception",
    "code": "3120009",
    "en": "Invalid block ID"
  },
  {
    "name": "transaction_id_type_exception",
    "code": "3120010",
    "en": "Invalid transaction ID"
  },
  {
    "name": "packed_transaction_type_exception",
    "code": "3120011",
    "en": "Invalid packed transaction"
  },
  {
    "name": "asset_type_exception",
    "code": "3120012",
    "en": "Invalid asset"
  },
  {
    "name": "symbol_type_exception",
    "code": "3120013",
    "en": "Invalid symbol"
  },
  {
    "name": "permission_type_exception",
    "code": "3120014",
    "en": "Invalid permission"
  },
  {
    "name": "group_type_exception",
    "code": "3120015",
    "en": "Invalid group"
  },
  {
    "name": "authorizer_ref_type_exception",
    "code": "3120016",
    "en": "Invalid authorizer ref"
  },
  {
    "name": "address_type_exception",
    "code": "3120017",
    "en": "Invalid address"
  },
  {
    "name": "name128_type_exception",
    "code": "3120018",
    "en": "Invalid name128"
  },
  {
    "name": "chain_id_type_exception",
    "code": "3120019",
    "en": "Invalid chain id"
  },
  {
    "name": "plugin_exception",
    "code": "3130000",
    "en": "plugin exception"
  },
  {
    "name": "missing_chain_api_plugin_exception",
    "code": "3130001",
    "en": "Missing Chain API Plugin"
  },
  {
    "name": "missing_wallet_api_plugin_exception",
    "code": "3130002",
    "en": "Missing Wallet API Plugin"
  },
  {
    "name": "missing_net_api_plugin_exception",
    "code": "3130003",
    "en": "Missing Net API Plugin"
  },
  {
    "name": "missing_evt_api_plugin_exception",
    "code": "3130004",
    "en": "Missing EVT API Plugin"
  },
  {
    "name": "missing_history_api_plugin_exception",
    "code": "3130005",
    "en": "Missing History API Plugin"
  },
  {
    "name": "plugin_config_exception",
    "code": "3130006",
    "en": "Incorrect plugin configuration"
  },
  {
    "name": "missing_chain_plugin_exception",
    "code": "3130008",
    "en": "Missing Chain Plugin"
  },
  {
    "name": "missing_producer_api_plugin_exception",
    "code": "3130009",
    "en": "Missing Producer API Plugin"
  },
  {
    "name": "missing_postgres_plugin_exception",
    "code": "3130010",
    "en": "Missing postgres Plugin"
  },
  {
    "name": "exceed_query_limit_exception",
    "code": "3130011",
    "en": "Exceed max query limit"
  },
  {
    "name": "wallet_exception",
    "code": "3140000",
    "en": "wallet exception"
  },
  {
    "name": "wallet_exist_exception",
    "code": "3140001",
    "en": "Wallet already exists"
  },
  {
    "name": "wallet_nonexistent_exception",
    "code": "3140002",
    "en": "Nonexistent wallet"
  },
  {
    "name": "wallet_locked_exception",
    "code": "3140003",
    "en": "Locked wallet"
  },
  {
    "name": "wallet_missing_pub_key_exception",
    "code": "3140004",
    "en": "Missing public key"
  },
  {
    "name": "wallet_invalid_password_exception",
    "code": "3140005",
    "en": "Invalid wallet password"
  },
  {
    "name": "wallet_not_available_exception",
    "code": "3140006",
    "en": "No available wallet"
  },
  {
    "name": "wallet_unlocked_exception",
    "code": "3140007",
    "en": "Already unlocked"
  },
  {
    "name": "key_exist_exception",
    "code": "3140008",
    "en": "Key already exists"
  },
  {
    "name": "key_nonexistent_exception",
    "code": "3140009",
    "en": "Nonexistent key"
  },
  {
    "name": "unsupported_key_type_exception",
    "code": "3140010",
    "en": "Unsupported key type"
  },
  {
    "name": "invalid_lock_timeout_exception",
    "code": "3140011",
    "en": "Wallet lock timeout is invalid"
  },
  {
    "name": "secure_enclave_exception",
    "code": "3140012",
    "en": "Secure Enclave Exception"
  },
  {
    "name": "token_database_exception",
    "code": "3150000",
    "en": "token_database exception"
  },
  {
    "name": "token_database_key_already_existed",
    "code": "3150001",
    "en": "Key is already existed."
  },
  {
    "name": "token_database_key_not_found",
    "code": "3150002",
    "en": "Not found specific key."
  },
  {
    "name": "token_database_rocksdb_exception",
    "code": "3150003",
    "en": "Rocksdb internal error occurred."
  },
  {
    "name": "token_database_no_savepoint",
    "code": "3150004",
    "en": "No savepoints anymore"
  },
  {
    "name": "token_database_seq_not_valid",
    "code": "3150005",
    "en": "Seq for checkpoint is not valid."
  },
  {
    "name": "token_database_db_action_exception",
    "code": "3150006",
    "en": "Unknown db action type."
  },
  {
    "name": "token_database_dirty_flag_exception",
    "code": "3150007",
    "en": "Checkspoints log file is in dirty."
  },
  {
    "name": "token_database_squash_exception",
    "code": "3150008",
    "en": "Cannot perform squash operation now"
  },
  {
    "name": "token_database_snapshot_exception",
    "code": "3150009",
    "en": "Create or restore snapshot failed"
  },
  {
    "name": "token_database_persist_exception",
    "code": "3150010",
    "en": "Persist savepoints failed"
  },
  {
    "name": "guard_exception",
    "code": "3160101",
    "en": "Database exception"
  },
  {
    "name": "database_guard_exception",
    "code": "3160102",
    "en": "Database usage is at unsafe levels"
  },
  {
    "name": "reversible_guard_exception",
    "code": "3160103",
    "en": "Reversible block log usage is at unsafe levels"
  },
  {
    "name": "controller_emit_signal_exception",
    "code": "3170000",
    "en": "Exceptions that are allowed to bubble out of emit calls in controller"
  },
  {
    "name": "checkpoint_exception",
    "code": "3170001",
    "en": "Block does not match checkpoint"
  },
  {
    "name": "http_exception",
    "code": "3180000",
    "en": "http exception"
  },
  {
    "name": "invalid_http_client_root_cert",
    "code": "3180001",
    "en": "invalid http client root certificate"
  },
  {
    "name": "invalid_http_response",
    "code": "3180002",
    "en": "invalid http response"
  },
  {
    "name": "resolved_to_multiple_ports",
    "code": "3180003",
    "en": "service resolved to multiple ports"
  },
  {
    "name": "fail_to_resolve_host",
    "code": "3180004",
    "en": "fail to resolve host"
  },
  {
    "name": "http_request_fail",
    "code": "3180005",
    "en": "http request fail"
  },
  {
    "name": "invalid_http_request",
    "code": "3180006",
    "en": "invalid http request"
  },
  {
    "name": "exceed_deferred_request",
    "code": "3180007",
    "en": "exceed max http deferred request"
  },
  {
    "name": "alloc_deferred_fail",
    "code": "3180008",
    "en": "Failed to alloc deferred id"
  },
  {
    "name": "evt_link_plugin_exception",
    "code": "3190000",
    "en": "evt-link plugin exception"
  },
  {
    "name": "evt_link_not_existed_now_excetpion",
    "code": "3190001",
    "en": "EVT-Link is not existed currently"
  },
  {
    "name": "evt_link_already_watched_exception",
    "code": "3190002",
    "en": "EVT-Link is already watched"
  },
  {
    "name": "exceed_evt_link_watch_time_exception",
    "code": "3190003",
    "en": "Exceed EVT-Link watch time"
  },
  {
    "name": "resource_exhausted_exception",
    "code": "3200000",
    "en": "Resource exhausted exception"
  },
  {
    "name": "tx_net_usage_exceeded",
    "code": "3200001",
    "en": "Transaction exceeded the current network usage limit imposed on the transaction"
  },
  {
    "name": "block_net_usage_exceeded",
    "code": "3200002",
    "en": "Transaction network usage is too much for the remaining allowable usage of the current block"
  },
  {
    "name": "abi_exception",
    "code": "3210000",
    "en": "ABI exception"
  },
  {
    "name": "abi_not_found_exception",
    "code": "3210001",
    "en": "No ABI found"
  },
  {
    "name": "invalid_ricardian_clause_exception",
    "code": "3210002",
    "en": "Invalid Ricardian Clause"
  },
  {
    "name": "invalid_ricardian_action_exception",
    "code": "3210003",
    "en": "Invalid Ricardian Action"
  },
  {
    "name": "invalid_type_inside_abi",
    "code": "3210004",
    "en": "The type defined in the ABI is invalid"
  },
  {
    "name": "duplicate_abi_type_def_exception",
    "code": "3210005",
    "en": "Duplicate type definition in the ABI"
  },
  {
    "name": "duplicate_abi_struct_def_exception",
    "code": "3210006",
    "en": "Duplicate struct definition in the ABI"
  },
  {
    "name": "duplicate_abi_action_def_exception",
    "code": "3210007",
    "en": "Duplicate action definition in the ABI"
  },
  {
    "name": "duplicate_abi_table_def_exception",
    "code": "3210008",
    "en": "Duplicate table definition in the ABI"
  },
  {
    "name": "duplicate_abi_err_msg_def_exception",
    "code": "3210009",
    "en": "Duplicate error message definition in the ABI"
  },
  {
    "name": "abi_serialization_deadline_exception",
    "code": "3210010",
    "en": "ABI serialization time has exceeded the deadline"
  },
  {
    "name": "abi_recursion_depth_exception",
    "code": "3210011",
    "en": "ABI recursive definition has exceeded the max recursion depth"
  },
  {
    "name": "abi_circular_def_exception",
    "code": "3210012",
    "en": "Circular definition is detected in the ABI"
  },
  {
    "name": "unpack_exception",
    "code": "3210013",
    "en": "Unpack data exception"
  },
  {
    "name": "pack_exception",
    "code": "3210014",
    "en": "Pack data exception"
  },
  {
    "name": "duplicate_abi_variant_def_exception",
    "code": "3210015",
    "en": "Duplicate variant definition in the ABI"
  },
  {
    "name": "unsupported_abi_version_exception",
    "code": "3210016",
    "en": "ABI has an unsupported version"
  },
  {
    "name": "snapshot_exception",
    "code": "3220000",
    "en": "Snapshot exception"
  },
  {
    "name": "snapshot_validation_exception",
    "code": "3220001",
    "en": "Snapshot Validation Exception"
  },
  {
    "name": "postgres_plugin_exception",
    "code": "3230000",
    "en": "Postgres plugin exception"
  },
  {
    "name": "postgres_connection_exception",
    "code": "3230001",
    "en": "Connect to postgresql server failed"
  },
  {
    "name": "postgres_exec_exception",
    "code": "3230002",
    "en": "Execute statements failed"
  },
  {
    "name": "postgres_version_exception",
    "code": "3230003",
    "en": "Version of postgres database is obsolete"
  },
  {
    "name": "postgres_sync_exception",
    "code": "3230004",
    "en": "Sync failed between postgres database and current blockchain state"
  },
  {
    "name": "postgres_send_exception",
    "code": "3230005",
    "en": "Send commands to postgres failed"
  },
  {
    "name": "postgres_poll_exception",
    "code": "3230006",
    "en": "Poll messages from postgres failed"
  },
  {
    "name": "postgres_query_exception",
    "code": "3230007",
    "en": "Query from postgres failed"
  },
  {
    "name": "postgres_not_enabled_exception",
    "code": "3230008",
    "en": "Postgres plugin is not enabled"
  },
  {
    "name": "execution_exception",
    "code": "3240000",
    "en": "Execution exception"
  },
  {
    "name": "unknown_action_exception",
    "code": "3240001",
    "en": "Unknown action exception"
  },
  {
    "name": "action_index_exception",
    "code": "3240002",
    "en": "Invalid action index exception"
  },
  {
    "name": "action_version_exception",
    "code": "3240003",
    "en": "Invalid action version exception"
  }
]
