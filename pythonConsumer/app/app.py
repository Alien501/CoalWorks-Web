from kafka.consumer import KafkaConsumer

consumer = KafkaConsumer(
  'iot-data',
  bootstrap_servers=['localhost:9093']
)

# This code will continously listen for message from kafka, so do process inside this or move to some other place vro
for message in consumer:
  print(message.topic, message.partition, message.offset, message.key, message.value)
